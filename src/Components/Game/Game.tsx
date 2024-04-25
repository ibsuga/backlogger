import { useContext } from 'react';
import { MdFavoriteBorder, MdFavorite, MdDelete } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation, FaSteamSquare } from "react-icons/fa";
import { IoTrophyOutline, IoTrophySharp } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlinePlayCircleOutline, MdOutlineCircle } from "react-icons/md";
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data'
import './Game.css'
import GameRatingSelector from './GameRatingSelector';
import EditGameButton from '../EditGameButton/EditGameButton';

type GameDataType = { [key: string]: { 'label': string, 'icon': JSX.Element } };

const Game = (props: {
    game: gameType,
}) => {
    const gameDataCtx = useContext(GameDataContext);

    //Favorite toggler
    const handleToggleFavorite = () => {
        const game = {
            ...props.game,
            'isFavorite': !props.game.isFavorite
        }
        gameDataCtx.handleUpdateGame(game);
    }

    const handleUpdateRating = (rating: number) => {
        const game = {
            ...props.game,
            'rating': rating
        }
        gameDataCtx.handleUpdateGame(game);
    }

    //Sets the platform logo and label, based on the selected platform on game creation.
    const GameData: GameDataType = {
        'nsw': { 'label': 'Nintendo Switch', 'icon': <SiNintendoswitch /> },
        'steam': { 'label': 'Steam', 'icon': <FaSteamSquare /> },
        'ps5': { 'label': 'PlayStation 5', 'icon': <FaPlaystation /> },
    }

    //Sets the status mark as a logo, based on the selected status state.
    const completionLogo: { [key: string]: JSX.Element } = {
        'unfinished': <IoTrophyOutline />,
        'complete': <IoTrophySharp />,
        'mastered': <GiLaurelsTrophy />,
    }

    const handleTogglePlayingStatus = () => {
        const game = {
            ...props.game,
            'isPlaying': !props.game.isPlaying,
        }
        gameDataCtx.handleUpdateGame(game);
    }


    const handleToggleCompletion = () => {
        let completion = props.game.completion
        if (completion === 'unfinished') {
            completion = 'complete'
        } else if (completion === 'complete') {
            completion = 'mastered'
        } else {
            completion = 'unfinished'
        }
        const game = {
            ...props.game,
            'completion': completion
        }
        gameDataCtx.handleUpdateGame(game);
    }

    return (
        <div className="Game">
            <div className="game-content" style={{ background: `url(${props.game.background})` }}>
                <div className="game-rating">
                    <GameRatingSelector defaultRating={props.game.rating} handleUpdateRating={handleUpdateRating} />
                </div>
                <div className="game-completion" onClick={handleToggleCompletion}>{completionLogo[props.game.completion]}</div>
                <div className='game-playing-status' onClick={handleTogglePlayingStatus}>{props.game.isPlaying ? <MdOutlinePlayCircleOutline /> : <MdOutlineCircle />}</div>
                <div className="game-name"><span>{props.game.name}</span></div>
                <div className="game-tools">
                    <div className="tools-left">
                        <button className={`tool game-favorite ${props.game.isFavorite ? 'active' : ''}`} onClick={handleToggleFavorite}>
                            {props.game.isFavorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
                        </button>
                    </div>
                    <div className="tools-right">
                        <button className='tool game-delete' onClick={() => gameDataCtx.handleDeleteGame(props.game.id)}><MdDelete /></button>
                        <EditGameButton gameData={props.game} />
                    </div>
                </div>
            </div>
            <div className={`game-platform ${props.game.platform}`}>
                <span>{GameData[props.game.platform].label}</span>
                <div>{GameData[props.game.platform].icon}</div>
            </div>
        </div>
    )
}

export default Game;
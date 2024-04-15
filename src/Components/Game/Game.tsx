import { useContext } from 'react';
import { MdFavoriteBorder, MdFavorite, MdDelete } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation, FaSteamSquare } from "react-icons/fa";
import { IoTrophyOutline, IoTrophySharp } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data'
import './Game.css'
import GameRatingSelector from './GameRatingSelector';

type GameDataType = { [key: string]: { 'label': string, 'icon': JSX.Element } };

const Game = (props: {
    game: gameType,
}) => {
    const gameDataCtx = useContext(GameDataContext);

    //Favorite toggler
    const handleToggleFavorite = () => {
        const game = {
            ...props.game,
            'favorite': !props.game.favorite
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
    const statusLogo: { [key: string]: JSX.Element } = {
        'complete': <IoTrophySharp />,
        'mastered': <GiLaurelsTrophy />,
        'to-play': <IoTrophyOutline />,
    }

    const handleToggleCompletion = () => {
        let status = props.game.status
        if (status === 'to-play') {
            status = 'complete'
        } else if (status === 'complete') {
            status = 'mastered'
        } else {
            status = 'to-play'
        }
        const game = {
            ...props.game,
            'status': status
        }
        gameDataCtx.handleUpdateGame(game);
    }

    return (
        <div className="Game">
            <div className="Game-content">
                <div className="Game-rating">
                    <GameRatingSelector defaultRating={props.game.rating} handleUpdateRating={handleUpdateRating} />
                </div>
                <div className="Game-status" onClick={handleToggleCompletion}>{statusLogo[props.game.status]}</div>
                <div className="Game-name"><span>{props.game.name}</span></div>
                <div className="Game-tools">
                    <button className={`Game-favorite ${props.game.favorite ? 'active' : ''}`} onClick={handleToggleFavorite}>
                        {props.game.favorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
                    </button>
                    <button className={'Game-delete'} onClick={() => gameDataCtx.handleDeleteGame(props.game.id)}><MdDelete /></button>
                </div>
            </div>
            <div className={`Game-platform ${props.game.platform}`}>
                <span>{GameData[props.game.platform].label}</span>
                <div>{GameData[props.game.platform].icon}</div>
            </div>
        </div>
    )
}

export default Game;
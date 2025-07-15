import './GameCard.css'
import { MdFavorite, MdFavoriteBorder, MdOutlineCircle, MdOutlinePlayCircleOutline } from 'react-icons/md'
import GameRatingSelector from '../Game/GameRatingSelector'
import EditGameButton from '../EditGameButton/EditGameButton'
import DeleteGameDialog from '../DeleteGameDialog/DeleteGameDialog'
import { gameType } from '../../stores/useGameStore'


import { IoMdTrophy } from "react-icons/io";


const GameCard = (props: {
    game: gameType,
    gameCompletionIcon: JSX.Element,
    gamePlatform: { 'label': string, 'icon': JSX.Element },
    handleUpdateRating: (rating: number) => void,
    handleToggleCompletion: () => void,
    handleTogglePlayingStatus: () => void,
    handleToggleFavorite: () => void,
}) => {
    return (
        <div className="GameCard">

            <div className="game-background" style={{ background: `url(${props.game.background})` }}>

                <div className="debug-tools">
                    <DeleteGameDialog game={props.game} />
                    <EditGameButton gameData={props.game} />
                </div>

            </div>

            <div className="bottom-bar">
                <span> GAME STATUS </span>

                <div className="challenges">
                    <IoMdTrophy />
                    <span>420</span>
                </div>

            </div>


            {/* <div className="game-content" style={{ background: `url(${props.game.background})` }}>
                <div className="game-rating">
                    <GameRatingSelector rating={props.game.rating} handleUpdateRating={props.handleUpdateRating} />
                </div>
                <div className="game-completion" onClick={props.handleToggleCompletion}>{props.gameCompletionIcon}</div>
                <div className='game-playing-status' onClick={props.handleTogglePlayingStatus}>{props.game.isPlaying ? <MdOutlinePlayCircleOutline /> : <MdOutlineCircle />}</div>
                <div className="game-name"><span>{props.game.name}</span></div>
                <div className="game-tools">
                    <div className="tools-left">
                        <button className={`tool game-favorite ${props.game.isFavorite ? 'active' : ''}`} onClick={props.handleToggleFavorite}>
                            {props.game.isFavorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`game-platform ${props.game.platform}`}>
                <span>{props.gamePlatform.label}</span>
                <div>{props.gamePlatform.icon}</div>
            </div> */}



        </div>
    )
}

export default GameCard;
import { useContext } from 'react'
import { GameDataContext } from '../../App'
import { MdDelete, MdFavorite, MdFavoriteBorder, MdOutlineCircle, MdOutlinePlayCircleOutline } from 'react-icons/md'
import { gameType } from '../../data/game_data'
import GameRatingSelector from '../Game/GameRatingSelector'
import EditGameButton from '../EditGameButton/EditGameButton'
import './GameCard.css'


const GameCard = (props: {
    game: gameType,
    gameCompletionIcon: JSX.Element,
    gamePlatform: { 'label': string, 'icon': JSX.Element },
    handleUpdateRating: (rating: number) => void,
    handleToggleCompletion: () => void,
    handleTogglePlayingStatus: () => void,
    handleToggleFavorite: () => void,
}) => {
    const gameDataCtx = useContext(GameDataContext);
    return (
        <div className="GameCard">
            <div className="game-content" style={{ background: `url(${props.game.background})` }}>
                <div className="game-rating">
                    <GameRatingSelector defaultRating={props.game.rating} handleUpdateRating={props.handleUpdateRating} />
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
                    <div className="tools-right">
                        <button className='tool game-delete' onClick={() => gameDataCtx.handleDeleteGame(props.game.id)}><MdDelete /></button>
                        <EditGameButton gameData={props.game} />
                    </div>
                </div>
            </div>
            <div className={`game-platform ${props.game.platform}`}>
                <span>{props.gamePlatform.label}</span>
                <div>{props.gamePlatform.icon}</div>
            </div>
        </div>
    )
}

export default GameCard;
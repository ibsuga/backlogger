import './GameSmall.css';
import { MdFavorite, MdFavoriteBorder, MdOutlineCircle, MdOutlinePlayCircleOutline } from 'react-icons/md'
import GameRatingSelector from '../Game/GameRatingSelector'
import EditGameButton from '../EditGameButton/EditGameButton'
import DeleteGameDialog from '../DeleteGameDialog/DeleteGameDialog';
import { gameType } from '../../stores/useGameStore';


const GameSmall = (props: {
    game: gameType,
    gameCompletionIcon: JSX.Element,
    gamePlatform: { 'label': string, 'shortLabel': string, 'icon': JSX.Element },
    handleUpdateRating: (rating: number) => void,
    handleToggleCompletion: () => void,
    handleTogglePlayingStatus: () => void,
    handleToggleFavorite: () => void,
}) => {
    return (
        <div className="GameSmall">
            <div className='game-image' style={{ backgroundImage: `url(${props.game.background})` }}></div>
            <div className='game-content'>
                <div className='game-name'>{props.game.name}</div>
                <div className='game-bottom-content'>
                    <div className="game-rating">
                        <GameRatingSelector rating={props.game.rating} handleUpdateRating={props.handleUpdateRating} />
                    </div>
                    <button className={`tool game-favorite ${props.game.isFavorite ? 'active' : ''}`} onClick={props.handleToggleFavorite}>
                        {props.game.isFavorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
                    </button>
                    <div className="game-completion" onClick={props.handleToggleCompletion}>{props.gameCompletionIcon}</div>
                    <div className='game-playing-status' onClick={props.handleTogglePlayingStatus}>{props.game.isPlaying ? <MdOutlinePlayCircleOutline /> : <MdOutlineCircle />}</div>

                    <div className='game-tools'>
                        <DeleteGameDialog game={props.game} />
                        <EditGameButton gameData={props.game} />
                    </div>
                    <div className={`game-platform ${props.game.platform}`}>{props.gamePlatform.shortLabel}</div>
                </div>
            </div>
        </div>
    )
}

export default GameSmall;
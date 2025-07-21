import { useState } from 'react';
import { createPortal } from 'react-dom';
import { MdFavorite, MdFavoriteBorder, MdOutlineCircle, MdOutlinePlayCircleOutline } from 'react-icons/md';
import { gameType } from '../../stores/useGameStore';
import DeleteGameDialog from '../DeleteGameDialog/DeleteGameDialog';
import EditGameButton from '../EditGameButton/EditGameButton';
import GameRatingSelector from '../Game/GameRatingSelector';
import GameDialog from '../GameDialog/GameDialog';
import './GameCard.css';


const GameCard = (props: {
    game: gameType,
    gameCompletionIcon: JSX.Element,
    gamePlatform: { 'label': string, 'icon': JSX.Element },
    handleUpdateRating: (rating: number) => void,
    handleToggleCompletion: () => void,
    handleTogglePlayingStatus: () => void,
    handleToggleFavorite: () => void,
}) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="GameCard" onClick={() => setDialogOpen(!dialogOpen)}>
            <div className="game-content" style={{ background: `url(${props.game.background})` }}>
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
                    <div className="tools-right">
                        <DeleteGameDialog game={props.game} />
                        <EditGameButton gameData={props.game} />
                    </div>
                </div>
            </div>
            <div className={`game-platform ${props.game.platform}`}>
                <span>{props.gamePlatform.label}</span>
                <div>{props.gamePlatform.icon}</div>
            </div>
            {
              dialogOpen && createPortal(
                <GameDialog gameData={props.game} handleClose={() => setDialogOpen(false)} />, document.body
              )
            }
        </div>
    )
}

export default GameCard;
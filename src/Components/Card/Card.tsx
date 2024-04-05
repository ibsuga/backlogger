import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useContext } from 'react';
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data'
import './Card.css'

const Card = (props: {
    game: gameType,
    size: string
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

    return (
        <div className="Card">
            <div className="card-content">
                <div className="card-tools">
                    <button onClick={() => gameDataCtx.handleDeleteGame(props.game.id)}>DELETE</button>
                </div>
                <div className="card-name"><span>{props.game.name}</span></div>
                <div className="card-info">
                    <div className="card-info-button">R</div>
                    <div className={`card-info-button ${props.game.favorite ? 'active' : ''}`} onClick={handleToggleFavorite}>
                        {props.game.favorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
                    </div>
                    <div className="card-info-button">S</div>
                    <div className="card-info-button">C</div>
                </div>
            </div>
            <div className={`card-platform ${props.game.platform}`}>{props.game.platform}</div>
        </div>
    )
}

export default Card;
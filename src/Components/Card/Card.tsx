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
        <div className={`Card ${props.size}`} >
            <div className='Title'>{props.game.name}</div>
            <div className='Content'>&nbsp;</div>
            <div className='Platform'>{props.game.platform}</div>
            <button onClick={handleToggleFavorite}>
                {props.game.favorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <button onClick={() => gameDataCtx.handleDeleteGame(props.game.id)}>DELETE</button>
        </div >
    )
}

export default Card;
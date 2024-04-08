import { useContext, useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation, FaSteamSquare } from "react-icons/fa";
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data'
import './Card.css'
import CardRatingSelector from './CardRatingSelector';

const Card = (props: {
    game: gameType,
    size: string
}) => {
    const gameDataCtx = useContext(GameDataContext);
    const [displayRatingSelector, setDisplayRatingSelector] = useState(true);

    //Favorite toggler
    const handleToggleFavorite = () => {
        const game = {
            ...props.game,
            'favorite': !props.game.favorite
        }
        gameDataCtx.handleUpdateGame(game);
    }

    const getPlatformLogo = (platform: string) => {
        switch (platform) {
            case 'nsw':
                return <SiNintendoswitch />;
            case 'steam':
                return <FaSteamSquare />;
            case 'ps5':
                return <FaPlaystation />;
            default:
                return <BiError />;
        }
    }

    const platformNames: { [key: string]: string } = {
        'nsw': 'Nintendo Switch',
        'steam': 'Steam',
        'ps5': 'PlayStation 5'
    }

    return (
        <div className="Card">
            <div className="card-content">
                <div className="card-rating">
                    <CardRatingSelector />
                </div>
                <div className="card-completion">completion</div>
                <div className="card-status">status</div>
                <div className="card-name"><span>{props.game.name}</span></div>
                <div className="card-tools">
                    <button className={`card-favorite ${props.game.favorite ? 'active' : ''}`} onClick={handleToggleFavorite}>
                        {props.game.favorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
                    </button>
                    <button className={'card-delete'} onClick={() => gameDataCtx.handleDeleteGame(props.game.id)}><MdDelete /></button>
                </div>
            </div>
            <div className={`card-platform ${props.game.platform}`}>
                <span>{platformNames[props.game.platform]}</span>
                <div>{getPlatformLogo(props.game.platform)}</div>
            </div>
        </div>
    )
}

export default Card;
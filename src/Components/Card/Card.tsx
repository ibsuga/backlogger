import { useContext } from 'react';
import { MdFavoriteBorder, MdFavorite, MdDelete } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation, FaSteamSquare } from "react-icons/fa";
import { IoTrophyOutline, IoTrophySharp } from "react-icons/io5";
import { GiDiamondTrophy } from "react-icons/gi";
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data'
import './Card.css'
import CardRatingSelector from './CardRatingSelector';

type GameDataType = { [key: string]: { 'label': string, 'icon': JSX.Element } };

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

    //Sets the completion mark as a logo, based on the selected completion state.
    const getCompletionLogo = (completion: string) => {
        switch (completion) {
            case 'full-complete':
                return <GiDiamondTrophy />;
            case 'complete':
                return <IoTrophySharp />;
            default:
                return <IoTrophyOutline />;
        }
    }

    return (
        <div className="Card">
            <div className="card-content">
                <div className="card-rating">
                    <CardRatingSelector defaultRating={props.game.rating} handleUpdateRating={handleUpdateRating} />
                </div>
                <div className="card-completion">{getCompletionLogo(props.game.completion)}</div>
                <div className="card-name"><span>{props.game.name}</span></div>
                <div className="card-tools">
                    <button className={`card-favorite ${props.game.favorite ? 'active' : ''}`} onClick={handleToggleFavorite}>
                        {props.game.favorite === true ? <MdFavorite /> : <MdFavoriteBorder />}
                    </button>
                    <button className={'card-delete'} onClick={() => gameDataCtx.handleDeleteGame(props.game.id)}><MdDelete /></button>
                </div>
            </div>
            <div className={`card-platform ${props.game.platform}`}>
                <span>{GameData[props.game.platform].label}</span>
                <div>{GameData[props.game.platform].icon}</div>
            </div>
        </div>
    )
}

export default Card;
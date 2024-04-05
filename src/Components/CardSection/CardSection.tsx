import './CardSection.css';
import { gameType } from '../../data/game_data';
import Card from '../Card/Card';


const CardSection = (props: {
    gameList: gameType[]
    cardSize: string
}) => {
    return (
        <div className='CardSection'>
            {props.gameList.map((game, index) =>
                <Card
                    key={index}
                    size={props.cardSize}
                    game={game}
                />
            )}
        </div>
    )
}

export default CardSection;


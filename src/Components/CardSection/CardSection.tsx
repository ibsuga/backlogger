import './CardSection.css';
import { gameType } from '../../data/game_data';
import Card from '../Card/Card';


const CardSection = (props: {
    gameList: gameType[]
}) => {
    return (
        <div className='CardSection'>
            {props.gameList.map((game, index) =>
                <Card
                    key={index}
                    game={game}
                />
            )}
        </div>
    )
}

export default CardSection;


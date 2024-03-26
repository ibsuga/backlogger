import './Section.css';
import { gameType } from '../../data/game_data';
import Card from '../Card/Card';


const Section = (props: {
    gameList: gameType[]
}) => {


    return (
        <div className='Section'>
            {props.gameList.map((game) =>
                <Card
                    name={game.name}
                    platform={game.platform}
                />
            )}
        </div>
    )
}

export default Section;


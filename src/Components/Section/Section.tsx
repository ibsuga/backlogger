import './Section.css';
import game_data from '../../data/game_data';
import Card from '../Card/Card';


const Section = () => {

    return (
        <div className='Section'>{game_data.map((game) => <Card name={game.name} />)}</div>
    )
}

export default Section;



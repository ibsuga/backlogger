import './CardSection.css';
import { gameType } from '../../data/game_data';
import Card from '../Card/Card';


const CardSection = (props: {
    gameList: gameType[],
    platformFilter: string

}) => {
    let filtered_games;
    if (props.platformFilter === '') {
        filtered_games = [...props.gameList]
    } else {
        filtered_games = props.gameList.filter((game: gameType) => game.platform === props.platformFilter);
    }

    return (
        <div className='CardSection'>
            {filtered_games.map((game, index) =>
                <Card
                    key={index}
                    game={game}
                />
            )}
        </div>
    )
}

export default CardSection;


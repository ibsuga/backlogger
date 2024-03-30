import { gameType, game_data } from '../../../data/game_data';
import './BacklogPage.css'
import CardSection from '../../CardSection/CardSection';

const BacklogPage = () => {
    //filtered backlog games
    let games_to_play = [...game_data];
    games_to_play = games_to_play.filter((game: gameType) => game.status === 'to-play')

    return (
        <div className="BacklogPage">
            <h1>Welcome to your backlog</h1>
            <hr />
            <CardSection gameList={games_to_play} cardSize='big' />
        </div>
    )
}

export default BacklogPage;
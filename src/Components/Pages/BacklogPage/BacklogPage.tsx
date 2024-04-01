import { gameType, game_data } from '../../../data/game_data';
import './BacklogPage.css'
import CardSection from '../../CardSection/CardSection';
import CreateGameButton from '../../CreateGameButton/CreateGameButton';

const BacklogPage = (props: {
    setGameData: (game: gameType) => void;
}) => {
    //filtered backlog games
    let games_to_play = [...game_data];
    games_to_play = games_to_play.filter((game: gameType) => game.status === 'to-play')

    return (
        <div className="BacklogPage">
            <div className='Content'>
                <h1>Games you want to play</h1>
                <hr />
                <CardSection gameList={games_to_play} cardSize='medium' />
            </div>
            <div className='Aside'>
                <CreateGameButton setGameData={props.setGameData} />
            </div>
        </div>
    )
}

export default BacklogPage;
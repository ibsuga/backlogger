import { gameType } from '../../data/game_data';
import './Backlog.css'
import CardSection from '../../Components/CardSection/CardSection';
import CreateGameButton from '../../Components/CreateGameButton/CreateGameButton';

const Backlog = (props: {
    gameData: gameType[]
}) => {
    //filtered backlog games
    let games_to_play = [...props.gameData];
    games_to_play = games_to_play.filter((game: gameType) => game.status === 'to-play')

    return (
        <div className="Backlog">
            <div className='Content'>
                <h1>Games you want to play</h1>
                <hr />
                <CardSection gameList={games_to_play} cardSize='medium' />
            </div>
            <div className='Aside'>
                <CreateGameButton />
            </div>
        </div>
    )
}

export default Backlog;
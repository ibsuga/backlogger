import { gameType } from '../../data/game_data';
import './Backlog.css'
import GameCollection from '../../Components/GameCollection/GameCollection';
import CreateGameButton from '../../Components/CreateGameButton/CreateGameButton';

const Backlog = (props: {
    gameData: gameType[]
}) => {
    //filtered backlog games
    let games_to_play = [...props.gameData];
    games_to_play = games_to_play.filter((game: gameType) => game.completion === 'unfinished')

    return (
        <div className="Backlog">
            <div className='Content'>
                <h1>Games you want to play</h1>
                <hr />
                <GameCollection title={'Backlog'} gameList={games_to_play} />
            </div>
            <div className='Aside'>
                <CreateGameButton />
            </div>
        </div>
    )
}

export default Backlog;
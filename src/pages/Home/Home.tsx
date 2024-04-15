import CompletedGames from '../../Components/CompletedGames/CompletedGames';
import GameCollection from '../../Components/GameCollection/GameCollection';
import { gameType } from '../../data/game_data';
import './Home.css';


const Home = (props: {
    gameData: gameType[],
}) => {
    return (
        <div className="Home">
            <CompletedGames gameList={props.gameData} />
            <GameCollection gameList={props.gameData} title={'Now Playing'} />
            <GameCollection gameList={props.gameData} title={'All Games'} disableScroll={true} />
        </div>
    )
}

export default Home;
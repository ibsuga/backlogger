import CompletedGames from '../../Components/CompletedGames/CompletedGames';
import GameCollection from '../../Components/GameCollection/GameCollection';
import { gameType } from '../../data/game_data';
import NowPlayingGames from '../../Components/NowPlayingGames/NowPlayingGames';
import './Home.css';


const Home = (props: {
    gameData: gameType[],
}) => {

    return (
        <div className="Home">
            <CompletedGames gameList={props.gameData} />
            <NowPlayingGames gameList={props.gameData} />
            <GameCollection gameList={props.gameData} title={'All Games'} disableScroll={true} />
        </div>
    )
}

export default Home;
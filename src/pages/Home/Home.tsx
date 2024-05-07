import CompletedGames from '../../Components/CompletedGames/CompletedGames';
import GameCollection from '../../Components/GameCollection/GameCollection';
import { gameType } from '../../data/game_data';
import NowPlayingGames from '../../Components/NowPlayingGames/NowPlayingGames';
import './Home.css';
import GameReleasesList from '../../Components/GameReleasesList/GameReleasesList';


const Home = (props: {
    gameData: gameType[],
    setPage: (page: string) => void,
}) => {

    return (
        <div className="Home">
            <CompletedGames gameList={props.gameData} setPage={props.setPage} />
            <NowPlayingGames gameList={props.gameData} />
            <GameReleasesList gameList={props.gameData} setPage={props.setPage} />
            <GameCollection gameList={props.gameData} title={'All Games'} disableScroll={true} />
        </div>
    )
}

export default Home;
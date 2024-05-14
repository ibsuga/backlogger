import './Home.css';
import useGameStore from '../../stores/useGameStore';
import CompletedGames from '../../Components/CompletedGames/CompletedGames';
import GameCollection from '../../Components/GameCollection/GameCollection';
import NowPlayingGames from '../../Components/NowPlayingGames/NowPlayingGames';
import GameReleasesList from '../../Components/GameReleasesList/GameReleasesList';


const Home = (props: {
    setPage: (page: string) => void,
}) => {
    const [games] = useGameStore((state) => [state.games])

    return (
        <div className="Home">
            <CompletedGames setPage={props.setPage} />
            <NowPlayingGames />
            <GameReleasesList setPage={props.setPage} />
            <GameCollection gameList={games} title={'All Games'} disableScroll={true} />
        </div>
    )
}

export default Home;
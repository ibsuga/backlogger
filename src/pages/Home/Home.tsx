import './Home.css';
import useGameStore from '../../stores/useGameStore';
import CompletedGames from '../../Components/CompletedGames/CompletedGames';
import GameCollection from '../../Components/GameCollection/GameCollection';
import NowPlayingGames from '../../Components/NowPlayingGames/NowPlayingGames';
import GameReleasesList from '../../Components/GameReleasesList/GameReleasesList';
import ActivitiesWidget from '../../Components/ActivitiesWidget/ActivitiesWidget';


const Home = (props: {
    setPage: (page: string) => void,
}) => {
    const [games] = useGameStore((state) => [state.games])

    return (
        <div className="Home">
            <div>
                <CompletedGames setPage={props.setPage} />
                <ActivitiesWidget setPage={props.setPage} />
            </div>
            <div>
                <NowPlayingGames />
                <GameReleasesList setPage={props.setPage} />
            </div>
            <GameCollection gameList={games} title={'All Games'} disableScroll={true} />
        </div>
    )
}

export default Home;
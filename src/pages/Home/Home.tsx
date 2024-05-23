import './Home.css';
import useGameStore from '../../stores/useGameStore';
import GameCollection from '../../Components/GameCollection/GameCollection';
import GameReleasesList from '../../Components/GameReleasesList/GameReleasesList';
import ActivitiesWidget from '../../Components/ActivitiesWidget/ActivitiesWidget';


const Home = (props: {
    setPage: (page: string) => void,
}) => {
    const [games] = useGameStore((state) => [state.games])

    return (
        <div className="Home">
            <div className='home-top'>
                {/* <CompletedGames setPage={props.setPage} /> */}
                <GameReleasesList setPage={props.setPage} />
                <ActivitiesWidget setPage={props.setPage} />
            </div>
            <div className='home-bottom'>
                {/* <NowPlayingGames /> */}
                <GameCollection gameList={games} title={'All Games'} disableScroll={true} />
            </div>
        </div>
    )
}

export default Home;
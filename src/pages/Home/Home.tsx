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
        <div className="Home__main">
          <GameReleasesList setPage={props.setPage} />
          <GameCollection gameList={games} title={'My game collection'} disableScroll={true} />
        </div>
        <ActivitiesWidget setPage={props.setPage} />
      </div>
    )
}

export default Home;
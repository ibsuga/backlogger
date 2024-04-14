import CardCollection from '../../Components/CardCollection/CardCollection';
import { gameType } from '../../data/game_data';
import './Home.css';


const Home = (props: {
    gameData: gameType[],
}) => {
    return (
        <div className="Home">
            <CardCollection gameList={props.gameData} />
        </div>
    )
}

export default Home;
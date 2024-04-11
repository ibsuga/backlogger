import CardSection from '../../Components/CardSection/CardSection';
import './Home.css';
import { gameType } from '../../data/game_data';



const Home = (props: {
    gameData: gameType[]


}) => {
    return (
        <div className="Home">
            <div className='content'>
                <CardSection gameList={props.gameData} />
            </div>
        </div>

    )
}

export default Home;
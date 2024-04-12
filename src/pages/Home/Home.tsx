import CardSection from '../../Components/CardSection/CardSection';
import './Home.css';
import { gameType } from '../../data/game_data';



const Home = (props: {
    gameData: gameType[],
    platformFilter: string

}) => {

    return (
        <div className="Home">
            <div className='content'>
                <CardSection gameList={props.gameData} platformFilter={props.platformFilter} />
            </div>
        </div>

    )
}

export default Home;
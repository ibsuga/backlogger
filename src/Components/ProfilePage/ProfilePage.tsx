import './ProfilePage.css';
import Section from '../Section/Section';
import { game_data, gameType } from '../../data/game_data';

const ProfilePage = () => {

    //To play filter
    let filter_to_play = [...game_data];
    filter_to_play = filter_to_play.filter((game: gameType) => game.status === 'to-play')

    //Completed filter
    let filter_completed = [...game_data];
    filter_completed = filter_completed.filter((game: gameType) => {
        if (game.status === 'completed') {
            return true;
        }
    })

    return (
        <div className="ProfilePage">
            <div className='FilterBar'>filterbar</div>
            <h1>Your Backlog</h1>
            <div className='Separator'>--------------</div>
            <Section gameList={filter_to_play} />
            <h1>Completed Games</h1>
            <div className='Separator'>--------------</div>
            <Section gameList={filter_completed} />
        </div>
    )
}

export default ProfilePage;
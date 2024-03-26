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
            <div className='Main'>
                <div className='FilterBar'>filterbar</div>
                <h1>Your Backlog</h1>
                <div className='Separator'>--------------</div>
                <Section gameList={filter_to_play} cardSize='big' />
                <h1>Completed Games</h1>
                <div className='Separator'>--------------</div>
                <Section gameList={filter_completed} cardSize='big' />
            </div>
            <div className='Aside'>
                <div className='Favorites'>
                    <h1>Favorites</h1>
                    <div className='Separator'>--------------</div>
                    <Section gameList={game_data} cardSize='small' />
                </div>
                <div className='Calendar'>Calendar</div>
                <div className='Activity'>Activity</div>
            </div>
        </div>
    )
}

export default ProfilePage;
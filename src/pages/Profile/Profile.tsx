import './Profile.css';
import GameCollection from '../../Components/GameCollection/GameCollection';


const Profile = (props: {
    setPage: (page: string) => void
    gameData: gameType[]
}) => {
    //To play filter
    let filter_to_play = [...props.gameData];
    filter_to_play = filter_to_play.filter((game: gameType) => game.completion === 'unfinished')

    //Completed filter
    let filter_completed = [...props.gameData];
    filter_completed = filter_completed.filter((game: gameType) => {
        if (game.completion === 'complete' || game.completion === 'mastered') {
            return true;
        }
    })

    //Favorites filter
    let filter_favorite = [...props.gameData];
    filter_favorite = filter_favorite.filter((game: gameType) => game.isFavorite === true)

    return (
        <div className="Profile">
            <div className='Main'>

                <div className='FilterBar'>filterbar</div>

                <h1 onClick={() => props.setPage('backlog')}>Your Backlog</h1>
                <hr />
                <GameCollection title={'To play'} gameList={filter_to_play} />

                <h1>Completed Games</h1>
                <hr />
                <GameCollection title={'Completed'} gameList={filter_completed} />

            </div>
            <div className='Aside'>
                <div className='Favorites'>
                    <h1>Favorites</h1>
                    <hr />
                    <GameCollection title={'Favorites'} gameList={filter_favorite} />
                </div>
                <div className='Calendar'>
                    <h1>Calendar</h1>
                    <hr />

                </div>
                <div className='Activity'>
                    <h1>Activity</h1>
                    <hr />
                    <ul className='ActivityList'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt ex maiores saepe temporibus aspernatur facere aut. Dolorum non minus eligendi dolores esse? </li>
                        <li>placeholder 2</li>
                        <li>placeholder 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;
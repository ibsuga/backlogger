import './CompletedGamesPage.css'
import { gameType } from '../../data/game_data'
import GameCollection from '../../Components/GameCollection/GameCollection'

const CompletedGamesPage = (props: {
    gameData: gameType[]
}) => {


    let completed_games = props.gameData.filter((game: gameType) => game.completion === 'complete' || game.completion === 'mastered');

    return (
        <div className="CompletedGamesPage">
            <div className='completed-games-content'>
                <GameCollection title='Completed Games' gameList={completed_games} />
            </div>
        </div>
    )
}

export default CompletedGamesPage;
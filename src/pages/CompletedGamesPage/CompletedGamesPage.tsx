import useGameStore, { gameType } from '../../stores/useGameStore';
import './CompletedGamesPage.css'
import GameCollection from '../../Components/GameCollection/GameCollection'

const CompletedGamesPage = () => {
    const [games] = useGameStore((state) => [state.games])

    const filtered_games = games.filter((game: gameType) => game.completion === 'complete' || game.completion === 'mastered');

    return (
        <div className="CompletedGamesPage">
            <div className='completed-games-content'>
                <GameCollection gameList={filtered_games} title='Completed Games' />
            </div>
        </div>
    )
}

export default CompletedGamesPage;
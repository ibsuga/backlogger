import useGameStore from "../../stores/useGameStore";
import { gameType } from "../../data/game_data";
import Section from "../Section/Section";
import './GameReleasesList.css'

const GameReleasesList = (props: {
    setPage: (page: string) => void,
}) => {
    const [games] = useGameStore((state) => [state.games])
    const today = new Date();

    let games_to_release = games
        .filter((game: gameType) => {
            const game_date = new Date(game.date!);
            return game_date > today;
        })
        .sort((a: gameType, b: gameType) => {
            const game_date_a = new Date(a.date!);
            const game_date_b = new Date(b.date!);
            return game_date_a.getTime() - game_date_b.getTime();
        })
        .slice(0, 3);

    return (
        <div className="GameReleasesList" onClick={() => props.setPage('calendar')}>
            <Section title="Upcoming Games" >
                <div className="release-list">
                    <ul>
                        {games_to_release.map((game: gameType, index: number) => {
                            const date = new Date(game.date!);
                            const year = date.getFullYear();
                            const month = date.toLocaleDateString('default', { month: 'long' })
                            const day = date.getDate();

                            return <li key={index}>
                                <img src={game.background} />
                                <div>
                                    <p>{game.name}</p>
                                    <p className="release-date">{`${month} ${day}, ${year}`}</p>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </Section>
        </div>
    )
}

export default GameReleasesList;
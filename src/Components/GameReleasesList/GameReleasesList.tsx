import useGameStore, { gameType } from "../../stores/useGameStore";
import GameReleaseCard from "../GameReleaseCard/GameReleaseCard";
import Section from "../Section/Section";
import './GameReleasesList.css'
import { GameDataContext } from "../../App";
import { useContext } from "react";

const GameReleasesList = (props: {
    setPage: (page: string) => void,
}) => {
    const [games] = useGameStore((state) => [state.games])
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const gameDataCtx = useContext(GameDataContext);

    let games_to_release = games
        .filter((game: gameType) => gameDataCtx.platformFilter === '' || game.platform === gameDataCtx.platformFilter)
        .filter((game: gameType) => {
            const game_date = new Date(game.date!);
            return game_date >= today;
        })
        .sort((a: gameType, b: gameType) => {
            const game_date_a = new Date(a.date!);
            const game_date_b = new Date(b.date!);
            return game_date_a.getTime() - game_date_b.getTime();
        })
        .slice(0, 3);

    return (
        <div className="GameReleasesList" onClick={() => props.setPage('calendar')}>
            <Section>
                <div className="release-list">
                    {games_to_release.map((game: gameType, index: number) =>
                        <GameReleaseCard game={game} key={index} hideTools />
                    )}
                </div>
            </Section>
        </div>
    )
}

export default GameReleasesList;
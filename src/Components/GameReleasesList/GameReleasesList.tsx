import { gameType } from "../../data/game_data";

const GameReleasesList = (props: {
    gameList: gameType[]
    setPage: (page: string) => void,
}) => {
    return (
        <div className="GameReleasesList">
            <button onClick={() => props.setPage('calendar')}> GO TO CALENDAR</button>
        </div>
    )
}

export default GameReleasesList;
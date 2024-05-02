import { Calendar } from 'primereact/calendar';
import CalendarDay from "../../Components/CalendarDay/CalendarDay";
import { gameType } from "../../data/game_data";
import './ReleasesCalendar.css'


const ReleasesCalendar = (props: {
    gameData: gameType[],
}) => {
    const dateTemplate = (date: any) => {
        let released_games = props.gameData.filter((game) => game.date === `${date.year}-${date.month + 1}-${date.day}`);
        return <CalendarDay games={released_games} date={date} />
    }

    return (
        <div className="ReleasesCalendar">
            <Calendar
                inline
                dateTemplate={dateTemplate}
            />
        </div>
    )
}


export default ReleasesCalendar;
import { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import CalendarDay from "../../Components/CalendarDay/CalendarDay";
import { gameType } from "../../data/game_data";
import './ReleasesCalendar.css'


const ReleasesCalendar = (props: {
    gameData: gameType[],
}) => {
    const [date, setDate] = useState<Nullable<Date>>(null);

    const dateTemplate = (date: any) => {
        let released_games = props.gameData.filter((game) => game.date === `${date.year}-${date.month + 1}-${date.day}`);
        return <CalendarDay games={released_games} day={date.day} />
    }

    return (
        <div className="ReleasesCalendar">
            <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                inline
                dateTemplate={dateTemplate}
            />
        </div>
    )
}


export default ReleasesCalendar;
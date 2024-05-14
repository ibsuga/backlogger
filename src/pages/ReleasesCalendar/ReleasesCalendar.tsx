import { Calendar } from 'primereact/calendar';
import CalendarDay from "../../Components/CalendarDay/CalendarDay";
import useGameStore from '../../stores/useGameStore';
import './ReleasesCalendar.css'

const ReleasesCalendar = () => {
    const [games] = useGameStore((state) => [state.games])
    const dateTemplate = (date: any) => {
        let released_games = games.filter((game) => game.date === `${date.year}-${date.month + 1}-${date.day}`);
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
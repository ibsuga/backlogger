import './CalendarDay.css'
import { gameType } from '../../data/game_data';


const CalendarDay = (props: {
    games: gameType[]
    day: number,
}) => {


    const getGameComponents = () => {
        let to_return = [];
        for (let i = 0; i < (Math.min(3, props.games.length)); i++) {
            to_return.push(
                <div className="calendar-game" style={{ backgroundImage: `url(${props.games[i].background})` }}>
                    <div className='calendar-game-platform'>platform</div>
                    <div className="calendar-game-name">{props.games[i].name}</div>
                </div>
            )
        }
        if (props.games.length > 3) {
            to_return.push(
                <div className="calendar-plus">+</div>
            )
        }
        return to_return;
    }


    return (
        <div className={"CalendarDay"}>
            <div className='day'><div>{props.day}</div></div>
            <div className={`calendar-day-content grid-${Math.min(4, props.games.length)}`}>
                {getGameComponents()}
            </div>
        </div>
    )
}

export default CalendarDay;
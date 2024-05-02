import './CalendarDay.css'
import { CgMoreAlt } from "react-icons/cg";
import { gameType } from '../../data/game_data';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';

type GameLabelType = { [key: string]: string }

const CalendarDay = (props: {
    games: gameType[]
    date: any,
}) => {

    const [visible, setVisible] = useState(false);

    const GameLabel: GameLabelType = {
        'nsw': 'Switch',
        'steam': 'Steam',
        'ps5': 'PS5',
    }

    const getGameComponents = () => {
        let to_return = [];
        for (let i = 0; i < (Math.min(3, props.games.length)); i++) {
            to_return.push(
                <div className="calendar-game" style={{ backgroundImage: `url(${props.games[i].background})` }}>
                    <div className="calendar-game-name">{props.games[i].name}</div>
                    <div className={`calendar-game-platform ${props.games[i].platform}`}>{GameLabel[props.games[i].platform]}</div>
                </div>
            )
        }
        if (props.games.length > 3) {
            to_return.push(
                <div className="calendar-plus">
                    <span><CgMoreAlt /></span>
                </div>
            )
        }
        return to_return;
    }

    const getSidebarGames = () => {
        let to_return = [];
        for (let i = 0; i < props.games.length; i++) {
            to_return.push(
                <div className="calendar-game" style={{ backgroundImage: `url(${props.games[i].background})` }}>
                    <div className="calendar-game-name">{props.games[i].name}</div>
                    <div className={`calendar-game-platform ${props.games[i].platform}`}>{GameLabel[props.games[i].platform]}</div>
                </div>
            )
        }
        return to_return;

    }

    return (
        <>
            <div className={"CalendarDay"} onClick={() => setVisible(true)}>
                <div className='day'><div>{props.date.day}</div></div>
                <div className={`calendar-day-content grid-${Math.min(4, props.games.length)}`}>
                    {getGameComponents()}
                </div>
            </div>

            <Sidebar className='calendar-sidebar' position='right' header={`${props.date.day}/${props.date.month + 1}/${props.date.year}`} visible={visible} onHide={() => setVisible(false)}>
                <div className='sidebar-content'>
                    {getSidebarGames()}
                </div>
            </Sidebar>
        </>
    )
}

export default CalendarDay;
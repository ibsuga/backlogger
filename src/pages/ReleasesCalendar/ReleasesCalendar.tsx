import { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import './ReleasesCalendar.css'

const ReleasesCalendar = () => {
    const [date, setDate] = useState<Nullable<Date>>(null);


    const dateTemplate = (date: any) => {
        return (
            <div style={{ color: 'green' }}>hey: {date.day}</div>
        )
    }

    return (
        <div className="ReleasesCalendar">
            <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                inline
                showWeek
                dateTemplate={dateTemplate}
            />
        </div>
    )
}


export default ReleasesCalendar;
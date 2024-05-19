import './ActivitiesPage.css'
import { Timeline } from 'primereact/timeline';
import useActivityStore from '../../stores/useActivityStore';


const ActivitiesPage = () => {

    const activities = useActivityStore((state) => state.activities);

    //Card component
    const ActivityCard = (item: any) => {
        return (
            <div className="ActivityCard">
                <img src={item.image} />
                <div className='activity-date'> {item.date} </div>
                <div className='activity-description'>{item.description}</div>
            </div>
        )
    }

    return (
        <div className="ActivitiesPage">
            <Timeline align='alternate' value={[...activities].reverse()} content={ActivityCard} />
        </div>
    )
}

export default ActivitiesPage;
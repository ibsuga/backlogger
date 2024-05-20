import './ActivitiesPage.css'
import { Timeline } from 'primereact/timeline';
import useActivityStore, { activityType } from '../../stores/useActivityStore';


const ActivitiesPage = () => {

    const [activities, getActivityDescription] = useActivityStore((state) => [state.activities, state.getActivityDescription]);

    //Card component
    const ActivityCard = (item: activityType) => {
        return (
            <div className="ActivityCard" style={{ backgroundImage: `url(${item.image})` }}>
                <div className='activity-date'>{item.date}</div>
                <div className='activity-description'>
                    {
                        getActivityDescription(item)
                    }
                </div>
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
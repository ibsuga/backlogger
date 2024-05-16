import './ActivitiesPage.css'
import { Timeline } from 'primereact/timeline';
import test_image from '../../assets/testback.jpeg';


const ActivitiesPage = () => {
    const activities = [
        'Started playing Sandland',
        'Rated Crusader Kings III with 5 stars jhdfgjshdfljkgjksdfgjkflvsdfkjlglkjhds',
        'Finally finished AC Odyssey :_)',
        'sdgfdsgsdfg',
        'sdfasdfasfasf'
    ]

    const ActivityCard = (item) => {
        return (
            <div className="ActivityCard">
                <img src={test_image} />
                <div className='activity-date'>
                    LA FECHA AQUI
                </div>
                {item}
            </div>
        )
    }

    return (
        <div className="ActivitiesPage">
            <Timeline align='alternate' value={activities} content={ActivityCard} />
        </div>
    )
}

export default ActivitiesPage;
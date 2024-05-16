import { Timeline } from 'primereact/timeline';
import Section from '../Section/Section';
import './ActivitesWidget.css'

const ActivitiesWidget = (props: {
    setPage: (page: string) => void;
}) => {

    const activities = [
        'Started playing Sandland',
        'Rated Crusader Kings III with 5 stars jhdfgjshdfljkgjksdfgjkflvsdfkjlglkjhds',
        'Finally finished AC Odyssey :_)',
        'sdgfdsgsdfg',
        'sdfasdfasfasf'
    ]

    return (
        <div className="ActivitiesWidget">
            <Section title='Recent Activity'>
                <div onClick={() => props.setPage('activities')}>
                    <Timeline align='left' value={activities} content={(activity) => activity} />
                </div>
            </Section>
        </div>
    )
}

export default ActivitiesWidget;  
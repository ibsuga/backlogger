import { Timeline } from 'primereact/timeline';
import Section from '../Section/Section';
import './ActivitesWidget.css'
import useActivityStore from '../../stores/useActivityStore';


const ActivitiesWidget = (props: {
    setPage: (page: string) => void;
}) => {
    const [activities, getActivityDescription] = useActivityStore((state) => [state.activities, state.getActivityDescription]);

    return (
        <div className="ActivitiesWidget">
            <Section title='Recent Activity'>
                <div onClick={() => props.setPage('activities')}>
                    <Timeline align='left' value={[...activities].reverse().slice(0, 10)} content={getActivityDescription} />
                </div>
            </Section>
        </div>
    )
}

export default ActivitiesWidget;  
import { Timeline } from 'primereact/timeline';
import Section from '../Section/Section';
import './ActivitesWidget.css'
import useActivityStore from '../../stores/useActivityStore';

const ActivitiesWidget = (props: {
    setPage: (page: string) => void;
}) => {
    const activities = useActivityStore((state) => state.activities);

    return (
        <div className="ActivitiesWidget">
            <Section title='Recent Activity'>
                <div onClick={() => props.setPage('activities')}>
                    <Timeline align='left' value={[...activities].reverse()} content={(activity) => activity.description} />
                </div>
            </Section>
        </div>
    )
}

export default ActivitiesWidget;  
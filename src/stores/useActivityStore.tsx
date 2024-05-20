import { create } from "zustand";

export type typeOfActivity = 'complete' | 'favorite' | 'rating' | 'playing' | 'stopped' | 'mastered' | 'add';

export type activityType = {
    type: typeOfActivity,
    gameName: string
    image: string,
    date: string,
    rating?: number
}

type activityStore = {
    activities: activityType[] | [],
    addActivity: (type: typeOfActivity, gameName: string, image: string, rating?: number) => void,
    getActivityDescription: (activity: activityType) => JSX.Element,
}

const useActivityStore = create<activityStore>()((set) => ({
    activities: JSON.parse(localStorage.getItem('BackloggerActivities') || '[]'),

    addActivity: (type, gameName, image, rating) => set((state) => {
        let activities_ = [...state.activities];

        const activityDate = new Date();
        const year = activityDate.getFullYear();
        const month = activityDate.toLocaleDateString('default', { month: 'long' })
        const day = activityDate.getDate();

        const new_activity = { type, gameName, image, rating, date: `${month} ${day}, ${year}` };

        activities_.push(new_activity);
        localStorage.setItem('BackloggerActivities', JSON.stringify(activities_))
        return { activities: activities_ };
    }),
    getActivityDescription: (activity) => {
        let description;
        switch (activity.type) {
            case 'add':
                description = <div>You added <span>{activity.gameName}</span> to the backlog.</div>;
                break;
            case 'favorite':
                description = <div>You marked <span>{activity.gameName}</span> as favorite.</div>;
                break;
            case 'playing':
                description = <div>Started playing <span>{activity.gameName}.</span></div>;
                break;
            case 'stopped':
                description = <div>Stopped playing <span>{activity.gameName}.</span></div>;
                break;
            case 'rating':
                description = <div>You gave <span>{activity.gameName}</span> a rating of {activity.rating}</div>;
                break;
            case 'complete':
                description = <div>Completed <span>{activity.gameName}.</span></div>;
                break;
            case 'mastered':
                description = <div>Mastered <span>{activity.gameName}.</span></div>;
                break;
        }
        return description;
    }
}))

export default useActivityStore;
import { create } from "zustand";


export type activityType = {
    description: string,
    date: string,
    image?: string
}

type activityStore = {
    activities: activityType[] | [],
    addActivity: (description: string, image?: string) => void,
}

const useActivityStore = create<activityStore>()((set) => ({
    activities: JSON.parse(localStorage.getItem('BackloggerActivities') || '[]'),
    addActivity: (description, image) => set((state) => {
        let activities_ = [...state.activities];

        const activityDate = new Date();
        const year = activityDate.getFullYear();
        const month = activityDate.toLocaleDateString('default', { month: 'long' })
        const day = activityDate.getDate();
        const new_activity = { description, image, date: `${month}-${day}-${year}` };

        activities_.push(new_activity);
        localStorage.setItem('BackloggerActivities', JSON.stringify(activities_))
        return { activities: activities_ };
    })
}))

export default useActivityStore;
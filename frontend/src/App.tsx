import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from './components/Header';
import { ActivityInterface } from './interfaces';
import { ActivityDashboard } from './pages/Activity/ActivityDashboard';

export const App: React.FC = () => {
    const [activities, setActivities] = useState<ActivityInterface[]>([]);
    const [showActivityForm, setShowActivityForm] = useState(false);
    const [activity, setActivity] = useState<ActivityInterface | undefined>(
        undefined
    );

    useEffect(() => {
        async function fetchActivities() {
            try {
                const { data } = await axios.get<ActivityInterface[]>(
                    '/api/activities'
                );

                setActivities(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchActivities();
    });

    const showFormHandler = (id?: string) => {
        if (id) {
            const a = activities.find(a => a.id === id);
            setActivity(a);
        }
        setShowActivityForm(true);
    };

    const closeFormHandler = () => {
        setShowActivityForm(false);
        setActivity(undefined);
    };

    return (
        <div>
            <Header showForm={showFormHandler} />
            <ActivityDashboard
                activities={activities}
                showForm={showActivityForm}
                closeForm={closeFormHandler}
                openForm={showFormHandler}
                singleActivity={activity || undefined}
            />
        </div>
    );
};

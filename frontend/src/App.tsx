import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from './components/Header';
import { ActivityInterface } from './interfaces';
import { ActivityDashboard } from './pages/Activity/ActivityDashboard';

export const App: React.FC = () => {
    const [activities, setActivities] = useState<ActivityInterface[]>([]);

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

    return (
        <div>
            <Header />
            <ActivityDashboard activities={activities} />
        </div>
    );
};

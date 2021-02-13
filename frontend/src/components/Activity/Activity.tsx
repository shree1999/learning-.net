import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ActivityType {
    id: string;
    title: string;
    description: string;
    date: Date;
    venue: string;
    city: string;
}

export const Activity: React.FC = () => {
    const [activities, setActivities] = useState<ActivityType[]>([]);

    async function getActivites() {
        try {
            const { data }: { data: ActivityType[] } = await axios.get(
                '/api/activities'
            );

            setActivities(data);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getActivites();
    });

    return (
        <div>
            <h1>Activities</h1>
            {activities.map(a => (
                <div key={a.id}>
                    <p>{a.title}</p>
                </div>
            ))}
        </div>
    );
};

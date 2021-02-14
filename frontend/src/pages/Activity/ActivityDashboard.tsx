import React, { useState } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

import { ActivityInterface } from '../../interfaces';
import { ActivityList } from '../../components/ActivityList';
import { ActivityDetail } from '../../components/ActivityDetail';

interface Props {
    activities: ActivityInterface[];
}

export const ActivityDashboard: React.FC<Props> = ({ activities }) => {
    const [activity, setActivity] = useState<ActivityInterface | undefined>(
        undefined
    );

    const selectActivityHandler = (id: string): void => {
        const a = activities.find(a => a.id === id);
        setActivity(a);
    };

    return (
        <Container>
            <Grid>
                <Grid.Column width="10">
                    <Header as="h1">Activity Dashboard</Header>
                    <ActivityList
                        activities={activities}
                        selectActivity={selectActivityHandler}
                    />
                </Grid.Column>
                <Grid.Column width="6">
                    {activities.length > 0 && (
                        <ActivityDetail activity={activity} />
                    )}
                </Grid.Column>
            </Grid>
        </Container>
    );
};

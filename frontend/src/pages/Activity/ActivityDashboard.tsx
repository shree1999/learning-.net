import React, { useState } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

import { ActivityInterface } from '../../interfaces';
import { ActivityList } from '../../components/ActivityList';
import { ActivityDetail } from '../../components/ActivityDetail';
import { ActivityForm } from '../../components/ActivityForm';

interface Props {
    activities: ActivityInterface[];
    showForm: boolean;
    closeForm: () => void;
    openForm: (id?: string) => void;
    singleActivity: ActivityInterface | undefined;
}

export const ActivityDashboard: React.FC<Props> = ({
    activities,
    showForm,
    closeForm,
    openForm,
    singleActivity,
}) => {
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
                        <ActivityDetail
                            activity={activity}
                            openForm={openForm}
                        />
                    )}
                    {showForm && (
                        <ActivityForm
                            closeForm={closeForm}
                            activity={singleActivity}
                        />
                    )}
                </Grid.Column>
            </Grid>
        </Container>
    );
};

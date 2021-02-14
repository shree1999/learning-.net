import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

import { ActivityInterface } from '../../interfaces';

interface Props {
    activities: ActivityInterface[];
}

export const ActivityDashboard: React.FC<Props> = ({ activities }) => {
    return (
        <Grid>
            <Container>
                <Grid.Column width="10">
                    <Header as="h1">Activity Dashboard</Header>
                    <List>
                        {activities.map(a => (
                            <List.Item key={a.id}>{a.title}</List.Item>
                        ))}
                    </List>
                </Grid.Column>
            </Container>
        </Grid>
    );
};

import React from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';

import { ActivityInterface } from '../interfaces';

interface Props {
    activities: ActivityInterface[];
    selectActivity: (id: string) => void;
}

export const ActivityList: React.FC<Props> = ({
    activities,
    selectActivity,
}) => {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(a => (
                    <Item key={a.id}>
                        <Item.Content>
                            <Item.Header as="a">{a.title}</Item.Header>
                            <Item.Meta>{a.date}</Item.Meta>
                            <Item.Description>
                                <div>{a.description}</div>
                                <div>
                                    {a.venue}, {a.city}
                                </div>
                            </Item.Description>
                            <Item.Extra>
                                <Button
                                    content="View"
                                    floated="right"
                                    primary
                                    onClick={() => selectActivity(a.id)}
                                />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
};

import React, { Fragment } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

import { ActivityInterface } from '../interfaces';

interface Props {
    activity: ActivityInterface | undefined;
}

export const ActivityDetail: React.FC<Props> = ({ activity }) => {
    return (
        <Fragment>
            {activity && (
                <Card>
                    <Image
                        src="/images/avatar/large/matthew.png"
                        wrapped
                        ui={false}
                    />
                    <Card.Content>
                        <Card.Header>{activity.title}</Card.Header>
                        <Card.Meta>
                            <span className="date">{activity.date}</span>
                        </Card.Meta>
                        <Card.Description>
                            {activity.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button content="Edit" primary />
                        <Button content="Delete" secondary />
                    </Card.Content>
                </Card>
            )}
        </Fragment>
    );
};

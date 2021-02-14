import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

import { ActivityInterface } from '../interfaces';

interface Props {
    closeForm: () => void;
    activity: ActivityInterface | undefined;
}

export const ActivityForm: React.FC<Props> = ({ closeForm, activity }) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <input
                        placeholder="Enter title"
                        value={activity && activity.title}
                    />
                </Form.Field>
                <Form.TextArea
                    label="Description"
                    placeholder="Provide the description for the activity"
                    value={activity && activity.description}
                />
                <Form.Field>
                    <label>Venue</label>
                    <input
                        placeholder="Enter Venue"
                        value={activity && activity.venue}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input
                        placeholder="Enter City"
                        value={activity && activity.city}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input placeholder="Enter date" type="date" />
                </Form.Field>
                <Form.Button primary>Submit</Form.Button>
                <Button secondary floated="right" onClick={() => closeForm()}>
                    Close
                </Button>
            </Form>
        </Segment>
    );
};

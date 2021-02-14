import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

import { ActivityInterface } from '../interfaces';

interface Props {
    closeForm: () => void;
    activity: ActivityInterface | undefined;
}

export const ActivityForm: React.FC<Props> = ({ closeForm, activity }) => {
    const initialState = activity ?? {
        id: '',
        title: '',
        description: '',
        date: '',
        venue: '',
        city: '',
    };

    const [userActivity, setUserActivity] = useState(initialState);

    const onChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        console.log(name, value);
        setUserActivity({ ...userActivity, [name]: value });
    };

    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userActivity);
    };

    return (
        <Segment clearing>
            <Form onSubmit={onSubmitHandler}>
                <Form.Field>
                    <label>Title</label>
                    <input
                        placeholder="Enter title"
                        value={userActivity.title}
                        name="title"
                        onChange={onChangeHandler}
                    />
                </Form.Field>
                <Form.TextArea
                    label="Description"
                    placeholder="Provide the description for the activity"
                    value={userActivity.description}
                    name="description"
                    onChange={onChangeHandler}
                />
                <Form.Field>
                    <label>Venue</label>
                    <input
                        placeholder="Enter Venue"
                        value={userActivity.venue}
                        name="venue"
                        onChange={onChangeHandler}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input
                        placeholder="Enter City"
                        value={userActivity.city}
                        name="city"
                        onChange={onChangeHandler}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input
                        placeholder="Enter date"
                        type="date"
                        name="date"
                        onChange={onChangeHandler}
                    />
                </Form.Field>
                <Form.Button primary>Submit</Form.Button>
                <Button secondary floated="right" onClick={() => closeForm()}>
                    Close
                </Button>
            </Form>
        </Segment>
    );
};

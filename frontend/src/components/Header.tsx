import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
    showForm: () => void;
}

export const Header: React.FC<Props> = ({ showForm }) => {
    return (
        <Menu>
            <Container>
                <Menu.Item name="brand" header>
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button
                        positive
                        content="Create Activity"
                        onClick={() => showForm()}
                    />
                </Menu.Item>
            </Container>
        </Menu>
    );
};

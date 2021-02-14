import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export const Header: React.FC = () => {
    return (
        <Menu>
            <Container>
                <Menu.Item name="brand" header>
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button positive content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    );
};

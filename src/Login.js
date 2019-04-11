import React from 'react';
import{
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';

export default () => (
    <Grid centered columns={2}>
        <Grid.Column>
            <Header as="h2" textAlign="center">
                Login
            </Header>
            <Segment>
                <Form size="large">
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                    />

                    <Button color="blue" fluid size="large">
                        Login
                    </Button>
                </Form>
            </Segment>
        </Grid.Column>
    </Grid>
)

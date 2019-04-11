import React from 'react'
import{
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';
 class UsernameForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }
    onChange(e){
        this.setState({
            username: e.target.value
        })
    }
    render(){
        return(

        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Enter your username
                </Header>
                <Segment>
                    <Form size="large" onSubmit={this.onSubmit} >
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            onChange={this.onChange}
                        />

                        <Button color="blue" fluid size="large">
                            Submit
                        </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        )
    }
 }

 export default UsernameForm
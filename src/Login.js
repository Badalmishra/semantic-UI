import React, { Component, Fragment } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Checkbox,Card, Divider, Image, Placeholder
} from 'semantic-ui-react';
  
export default class Login extends Component {
    state = { 
        loading: false,
        email:"",
        password:"",
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    handleLoadingClick = () => {
      this.setState({ loading: true })
  
      setTimeout(() => {
        this.setState({ loading: false })
        const data={
            email:this.state.email,
            password:this.state.password
        }
        this.props.login(data)
      }, 1000)

    }
    render(){
        const { loading } = this.state
        return(
            <Grid centered columns={2}>
                <Grid.Column>
                <Header as="h2" style={{marginTop:20}} textAlign="center">
                    Login
                </Header>
                <hr></hr>
                <Segment>
                    <Form size="large">
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Email address"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.email}
                        name="email"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                        name="password"
                    />
                    <Checkbox toggle  label="Remember Me" style={{marginBottom:10}}/>
                    <Button loading={loading} color="green" fluid size="large" onClick={this.handleLoadingClick}>
                        Login
                    </Button>
                    </Form>
                </Segment>
                <Message>
                    Not registered yet? <a href="#">Sign Up</a>
                </Message>
                </Grid.Column> 
            </Grid>
          )
    }
}
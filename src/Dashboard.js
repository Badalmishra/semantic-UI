import React, { Component, Fragment } from 'react';
import {
  Button,Card, Image,Label,Icon, Placeholder
} from 'semantic-ui-react';
export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state= {
            loading:false,
        }
    }
    logout= ()=>{
        this.setState({ loading: true })
    
        setTimeout(() => {
          this.setState({ loading: false })
          this.props.logout()
        }, 1000)
      }
    render(){
        return(
        <Fragment>
            <h1 style={{marginTop:20}}>Welcome To Dashboard 
            <Button onClick={this.logout} floated="right" as='div' labelPosition='left'>
                <Label as='a' basic color='red' pointing='right'>
                    Logout
                </Label>
                <Button loading={this.state.loading} color='red'>
                    <Icon name='fighter jet' />
                </Button>
            </Button>
            </h1>
            <hr></hr>
           {
               this.props.user.email?
               <Card >
                   <Placeholder>
                    <Placeholder.Image square />
                   </Placeholder>
                   <Card.Content>
                    <Fragment>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        <Card.Meta>{this.props.user.date}</Card.Meta>
                        <Card.Description>{this.props.user.description}</Card.Description>
                    </Fragment>
                   </Card.Content>
               </Card>
               :null
           }
            
        </Fragment>)
    }
}
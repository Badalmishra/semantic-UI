import React from 'react';
import { Container,Message, Menu, Button, Sidebar,Icon } from 'semantic-ui-react';

import Login from './Login';
import Dashboard from './Dashboard';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users:[
        {
          email:'badal@gmail.com',
          name:'Badal Mishra',
          password:'123456',
          avatar: '/images/avatar/large/helen.jpg',
          date: 'Joined in 2013',
          description: 'Software Developer',
        },
        {
            email:'mayank@gmail.com',
            name:'Mayank Sharma',
            password:'123457',
          avatar: '/images/avatar/large/matthew.png',
          date: 'Joined in 2007',
          description: 'SEO',
        },
        {
          email:'john@gmail.com',
          name:'john Mishra',
          password:'123458',
          avatar: '/images/avatar/large/molly.png',
          date: 'Joined in 1999',
          description: 'Maketting',
        },
      ],
      login: false,
      currentUser:"",
      error:"",
      visible: false
    }
  }
  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })
  login(data){
    if (data.email === "") {
        this.setState({error:"PLease Provide an email"})
        setTimeout(()=>{this.setState({error:""})},1000)
        return
    }
    if (data.password === "") {
      this.setState({error:"PLease Provide an password"})
      setTimeout(()=>{this.setState({error:""})},1000)
      return
    }
    let user = this.state.users.filter(user =>{
       return user.email == data.email && user.password == data.password
      })
    user = user[0]
    if (user) {
      this.setState({currentUser:user})
      this.setState({login:true,error:""})
    }else{
      this.setState({error:"Credentials didn't Match"})
      setTimeout(()=>{this.setState({error:""})},1000)
    }
    
  }
  logout(){
    console.log("i am");
    
    this.setState({login:false})
  }
  
 render(){
  const { visible } = this.state
   return( 
    <Sidebar.Pushable as={Container} wide fluid style={{height:"100vh"}}>
      <Button basic  style={{margin:20}} disabled={visible} color="black outline" onClick={this.handleShowClick}>
        <Icon name='right arrow' />
      </Button>
      <Sidebar
        as={Menu}
        animation='scale down'
        icon='labeled'
        inverted
        onHide={this.handleSidebarHide}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='right arrow' />
          Login
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='help' />
          Help
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='phone' />
          contact
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
            <Container>
            {this.state.error?
                <Message
                  icon='user'
                  header='Error!'
                  content={this.state.error}
                  />
              :null}
            {
              this.state.login?
              <Dashboard user={this.state.currentUser} logout={this.logout.bind(this)}/>
              :
              <Login login={this.login.bind(this) }/>
            }
          </Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    )
  }
}

export default App;
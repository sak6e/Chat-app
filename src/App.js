import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm'
import ChatScreen from './ChatScreen'
import {Container} from 'semantic-ui-react'
import Login from './Login'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'
    }
    this.onUsernameSubmitted=this.onUsernameSubmitted.bind(this)
  }
  onUsernameSubmitted(username){
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username}),
    })
        .then(response => {
          this.setState({
            currentUsername: username,
            currentScreen: 'ChatScreen'
          })
        })
        .catch(error => console.error('error', error))
  }
  render() {
    if(this.state.currentScreen==='WhatIsYourUsernameScreen') {
      return (
          <UsernameForm onSubmit={this.onUsernameSubmitted} />
      )
    }

    if(this.state.currentScreen==='ChatScreen'){
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}
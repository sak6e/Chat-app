import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import WhosOnlineList from './components/WhosOnlineList'

class ChatScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentUser: {},
            currentRoom: {},
            messages: ["okkk"],
        }
        this.sendMessage=this.sendMessage.bind(this)
    }
    sendMessage(text){
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id,
        })
    }
    componentDidMount() {
        const chatManager= new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:52a0e31f-35bc-4c0c-b451-4379b15cb0e4',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate',
            }),
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({currentUser})
                return currentUser.subscribeToRoom({
                    roomId: "19422750",
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                        onPresenceChange: () => this.forceUpdate(),
                    },
                })
            })
            .then(currentRoom => {
                this.setState({currentRoom})
            })
            .catch(error => console.error('error', error))
    }

    render(){
        const styles={
            container:{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            },
            chatContainer:{
                display: 'flex',
                flex: 1,
            },
            whosOnlineListContainer:{
                width: '300px',
                flex: 'none',
                padding: 20,
                backgroundColor: '#2c303b',
                color: 'white'
            },
            chatListContainer:{
                padding: 20,
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
            },
        }
        return(
            <div style={styles.container}>
                <div style={styles.chatContainer}>
                    <aside style={styles.whosOnlineListContainer}>
                        <WhosOnlineList
                            currentUser={this.state.currentUser}
                            users={this.state.currentRoom.users}
                        />
                    </aside>
                    <section style={styles.chatListContainer}>
                        <MessageList messages={this.state.messages} style={styles.chatList} />
                        <SendMessageForm onSubmit={this.sendMessage} />
                    </section>
                </div>
            </div>
        )
    }
}
export default ChatScreen
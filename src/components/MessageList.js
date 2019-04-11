import React from 'react'
import {List} from 'react-virtualized'

class MessageList extends React.Component{
    constructor(props){
        super(props)
        this.renderRow=this.renderRow.bind(this)
    }

    renderRow=({index,key,style}) => {

            <div key={key} style={style} className="row">
                <div className="user">
                    {this.props.messages}
                    "some_user"
                </div>
                <div className="msg">

                    "Hi there"
                </div>
            </div>

    }

    render(){

        const styles={
            container:{
                overflowY: 'scroll',
                flex: 1,
            },
            ul:{
                listStyle: 'none',
            },
            li:{
                marginTop: 13,
                marginBottom: 13,
            },
            senderUsername:{
                fontWeight:'bold',
            },
            message:{
                fontSize: 15,
            }
        }
        console.log("IG");
        console.log(this.props.messages);

        return(
            <div id="inagupta"
                style={{
                    ...this.props.style,
                    ...styles.container,
                }}
            >


                <ul style={styles.ul}>
                    {this.props.messages.map((message,index)=>(
                        <li key={index} style={styles.li}>
                            <div>
                                <span style={styles.senderUsername}>{message.senderId}</span>{' '}
                            </div>
                            <p style={styles.message}>{message.text} </p>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
export default MessageList
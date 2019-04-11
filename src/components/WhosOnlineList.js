import React from 'react'

class WhosOnlineList extends React.Component{
    renderUsers(){
        const styles={
            ul:{
                backgroundColor: '#2d4b56',
            }
        }
        return(
            <ul style={styles.ul}>
                {this.props.users.map((user, index) =>{
                    if(user.id === this.props.currentUser.id){
                        return(
                            <WhosOnlineListItem key={index} presenceState="online" >
                                {user.name} (You)
                            </WhosOnlineListItem>
                        )
                    }
                    return(
                        <WhosOnlineListItem key={index} presenceState={user.presence.state} >
                            {user.name}
                        </WhosOnlineListItem>
                    )
                })}
            </ul>
        )
    }
    render(){
        if(this.props.users){
            return this.renderUsers()
        } else{
            return <p>Loading...</p>
        }
    }
}
class WhosOnlineListItem extends React.Component{
    render(){
        const styles={
            li:{
                display: 'flex',
                alignItems: 'center',
                marginTop: 5,
                marginBottom: 5,
                paddingTop: 2,
                paddingBottom: 2,
                height: '100%',
            },
            div:{
                borderRadius: '50%',
                width: 11,
                height: 11,
                marginRight: 10,
            },
        }
        return(
            <li style={styles.li}>
                <div
                style={{
                    ...styles.div,
                    backgroundColor:
                    this.props.presenceState === 'online' ? '#539eff' : '#7d8493',
                }}>

                </div>
                {this.props.children}
            </li>
        )
    }
}
export default WhosOnlineList
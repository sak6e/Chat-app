import React from 'react'
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
            <div>
                <div>
                    <h2>What is your username?</h2>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" onChange={this.onChange} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
 }

 export default UsernameForm
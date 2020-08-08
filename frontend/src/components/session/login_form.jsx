import React from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'


class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email: '',
            password: '',
        }

        this.handleOnChange=this.handleOnChange.bind(this);
    }

    handleOnChange(type){
        return (e) =>{
            this.setState({[type]: e.target.value})
        }
    }
    submitHandler(e){
        e.preventDefault();
        this.props.login(this.state)

        this.props.history.push('/');

    }



    render(){
        return(
            <>
            <div className='loginSpace'>
            <div className='loginContainer'>
                <form className="loginForm" onSubmit={this.submitHandler.bind(this)}>

                <div className='loginItems'>

                    <div className="signInText">Sign In</div>
                    <div className="miscText">To an existing Steam account</div>

                    <label htmlFor="email">Email Address</label>
                    <input className="labelInput" type='text'id='email' onChange={(this.handleOnChange('email'))} value={this.state.email}/>

                    <label htmlFor="password">Password</label>
                    <input className="labelInput" type='password'id='password' onChange={(this.handleOnChange('password'))} value={this.state.password}/>

                    <input className="signInButton" type="submit" value='Sign In'/>
                </div>

                <div className='loginPadding'></div>

                <div className='createItems'>
                    <div className='createContainer'>
                        <div className="signInText">Create</div>
                        <div className="miscText">A new free account</div>
                        <div className="miscText">It's free to join and easy to use. Continue on to create your Steam account and get Steam, the leading digital solution for PC, Mac, and Linux games and Software.</div>
                    </div>

                    <div className="joinButton">Join Steam</div>
                    
                </div>
            </form>
            </div>
            </div>
            </>
        )
    }
}

export default withRouter(LoginForm);

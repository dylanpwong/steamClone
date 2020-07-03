import React from 'react';
import './splash.css';
import Header from './header.jsx';
import Login from "./login.jsx";
import Deals from "./deals.jsx";

class SplashPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            ed: 'kim'
        }

        this.onSignUpClick=this.onSignUpClick.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
        this.onLogin=this.onLogin.bind(this);
        this.onLogout=this.onLogout.bind(this);
    }

// this.props.history.push(/join);
// this.setState={ed: 'kim2} | Causes re-render
onSignUpClick(){
    this.props.history('/join');
}
onLogin(){
    this.props.history.push('/login')
}
onLogout(){
    this.props.logout();
}
checkLogin(){
    if (this.props.currentUser) {
        // debugger;
        console.log('Logged In')
        return(
            <>
            <div>
                <div>
                {this.props.currentUser.username}

                </div>
                <div onClick={this.onLogout}>
                    Logout
                </div>
            </div>
            </>
        )
    }else{
        return(
            <>
            {console.log('not logged in')}
            <Login onLogin={this.onLogin}/>
            </>
        )
    }
}

  render(){

    
        return(
            <>
            <div className='test'>
                
                {this.checkLogin()}
                <Header/>
                <Deals/>
                <GameList/>
                <div>CANCER</div>
            </div>

            <div onClick={this.onSignUpClick}>Sign in</div>
            </>

        )
    }
}

export default SplashPage;
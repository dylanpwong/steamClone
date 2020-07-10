import React from 'react';
import Login from './login.jsx';
import NavBar from './navBar.jsx';

class Header extends React.Component {
    constructor (props) {
        super(props);

        this.onSignUpClick=this.onSignUpClick.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
        this.onLogin=this.onLogin.bind(this);
        this.onLogout=this.onLogout.bind(this);
    }
    
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
                <div className='loggedIn'>
                    <div>
                    {this.props.currentUser.username}
    
                    </div>
                    &nbsp; &nbsp;
                    <div onClick={this.onLogout}>
                        logout
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
        return (
            <>
            <div className='topContainer'>

                {this.checkLogin()}

                <div className='header'>
                   <img className='steamLogo' src="https://royal-crossing-dev.s3.amazonaws.com/SteamLogo.png"/>
                   <div className='headerTopics'>
                        <div>STORE</div>
                        <div>COMMUNITY</div>
                        <div>ABOUT</div>
                        <div>SUPPORT</div>
                </div>
                </div>
            
            </div>

            <div className='upperContainer'>
                <NavBar/>
            </div>
            </>
        )
    }
}

export default Header; 
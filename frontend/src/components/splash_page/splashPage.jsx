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
    }

// this.props.history.push(/join);
// this.setState={ed: 'kim2} | Causes re-render
onSignUpClick(){
    this.props.history('/join');
}

  render(){
        return(
            <>
            <div className='test'>
                <Login/>
                <Header/>
                <Deals/>
                <div>Edward is dumb.</div>
                <div>CANCER</div>
            </div>

            <div onClick={this.onSignUpClick}>Sign in</div>
            </>

        )
    }
}

export default SplashPage;
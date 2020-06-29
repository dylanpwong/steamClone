import React from 'react';
import './splash.css';

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
            <div>
                hello
            </div>

            <div onClick={this.onSignUpClick}>Sign in</div>
            </>

        )
    }
}

export default SplashPage;
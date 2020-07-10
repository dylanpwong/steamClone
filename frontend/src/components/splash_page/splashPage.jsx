import React from 'react';
import './splash.css';
import Deals from "./deals.jsx";
import GameList from "./gameList.jsx";

class SplashPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            ed: 'kim'
        }
    }

// this.props.history.push(/join);
// this.setState={ed: 'kim2} | Causes re-render

  render(){
        return(
            <>
            <div className='test'>
                <Deals/>
                <GameList/>
            </div>

            {/* <div onClick={this.onSignUpClick}>Sign in</div> */}
            </>

        )
    }
}

export default SplashPage;
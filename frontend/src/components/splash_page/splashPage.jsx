import React from 'react';
import './splash.css';
import Deals from "./deals.jsx";
import GameList from "./gameList.jsx";

class SplashPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            games: null
        }
    }

// this.props.history.push(/join);
// this.setState={ed: 'kim2} | Causes re-render

componentDidMount(){
    this.props.fetchGames().then((res)=>{
        // debugger;
        this.setState({games: res.games})
    })
}
  render(){
      //Object.keys()
      //tjis.props.games2
      if(!this.state.games) return<> </>;
        return(
            <>
            <div className='test'>  
                {/* <Deals games2 = {games}/> */}
                <Deals/>
                <GameList/>
            </div>

            {/* <div onClick={this.onSignUpClick}>Sign in</div> */}
            </>

        )
    }
}

export default SplashPage;
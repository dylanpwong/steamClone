import React from 'react';
import './splash.css';
import Deals from "./deals.jsx";
import GameList from "./gameList.jsx";
import GameList_Container from"./gameList_container"
import { getPopular } from '../../util/game_api_util';
class SplashPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            firstRender: null,
            new_and_trending: null
        }
    }

// this.props.history.push(/join);
// this.setState={ed: 'kim2} | Causes re-render

componentDidMount(){
    // this.props.fetchGames().then((res)=>{
    //     // this.props.getTopRated();
        
    //     this.setState({games: res.games, new_and_trending: res.games})
    // })
    // this.props.getAllLists().then((res)=>{
    //     this.setState({firstRender: true});
    // })
    this.props.fetchGames()
    .then(res=>this.props.getPopular())
    .then(res=>this.props.getTopRated())
    .then(res=>this.props.getTopSellers())
    .then(res=>this.props.getReleaseDate())
    .then((res)=>this.setState({firstRender: 'true'}))
   
}
  render(){
      //Object.keys()
      //tjis.props.games2
      if(!this.state.firstRender ) return<> </>;
        return(
            <>
            <div className='test'>  
                {/* <Deals games2 = {games}/> */}
                <Deals/>
                {/* <GameList new_and_trending ={this.state.new_and_trending}/> */}
                <GameList_Container/>
            </div>

            {/* <div onClick={this.onSignUpClick}>Sign in</div> */}
            </>

        )
    }
}

export default SplashPage;
import React from "react";
import GameBox from "./gameBox"
import IndvGamesList from "./indvGamesList.jsx";
import "./splash.css";

class GameList extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            current: "new_and_trending",
            lists: {
                new_and_trending: this.props.new_and_trending,
                top_sellers: null,
            },
        }

        this.onTabClick=this.onTabClick.bind(this);
    }

    onTabClick(tabName) {

        return (e)=>{
            this.setState({current: tabName});
        }
    }

    render() {
        return (
            <>
            <div className="gameList">
                <br></br>
                <div className="tabs">
                    <div className="tabButton" onClick={this.onTabClick("new_and_trending")} >New and Trending</div>
                    <div className="tabButton" onClick={this.onTabClick("top_sellers")}>Top Sellers</div>
                    <div className="tabButton">What's Popular</div>
                    <div className="tabButton">Top Rated</div>
                    <div>Upcoming</div>
                </div>
                <div className="list">
                   <IndvGamesList listName = {this.state.current} lists={this.state.lists}/>
                </div>
            </div>

            </>
        )
    }


}


export default GameList;
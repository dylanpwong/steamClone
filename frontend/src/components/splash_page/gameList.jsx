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
                new_and_trending: this.props.newAndTrending,
                top_sellers: this.props.topSellers,
                whats_popular: this.props.popular,
                top_rated: this.props.topRated,
                upcoming: this.props.releaseDate,
            },
            prevEvent: "newAndTrending",
        }
        // debugger;
        this.onTabClick=this.onTabClick.bind(this);
    }

    onTabClick(tabName) {

        return (e)=>{
            if (this.state.prevEvent != e.target.id){
                e.target.classList.add("tabButton--active");
                document.getElementById(this.state.prevEvent).classList.toggle("tabButton--active");
                this.state.prevEvent = e.target.id;
            }
            if(document.getElementsByClassName("hoveredSelected").length >0 ) document.getElementsByClassName("hoveredSelected")[0].classList.remove("hoveredSelected");
            if(document.getElementsByClassName("hoverTitle2").length >0 ) document.getElementsByClassName("hoverTitle2")[0].classList.remove("hoverTitle2");
            if(document.getElementsByClassName("hoverPrice").length >0 ) document.getElementsByClassName("hoverPrice")[0].classList.remove("hoverPrice");
            this.setState({current: tabName});
        }

    }

    render() {
        // debugger
        return (
            <>
            <div className="gameList">
                <br></br>
                <div className="tabs">
                    <div className="tabButton tabButton--active" id="newAndTrending" onClick={this.onTabClick("new_and_trending")} >New and Trending</div>
                    <div className="tabButton" id="topSellers" onClick={this.onTabClick("top_sellers")}>Top Sellers</div>
                    <div className="tabButton" id="whatsPopular" onClick={this.onTabClick("whats_popular")}>What's Popular</div>
                    <div className="tabButton" id="topRated" onClick={this.onTabClick("top_rated")}>Top Rated</div>
                    <div className="tabButton" id="upcoming" onClick={this.onTabClick("upcoming")}>Upcoming</div>
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
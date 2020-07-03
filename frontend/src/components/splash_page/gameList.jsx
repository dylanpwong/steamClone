import React from "react";
import GameBox from "./gameBox"
import "./splash.css";

class GameList extends React.Component {
    render() {
        return (
            <>
            <div className="gameList">
                <div className="tabs">
                    <div>New and Trending</div>
                    <div>Top Sellers</div>
                    <div>What's Popular</div>
                    <div>Top Rated</div>
                    <div>Upcoming</div>
                </div>
                <div className="list">
                    <GameBox/>
                    <GameBox/>
                </div>
            </div>
            </>
        )
    }
}

export default GameList;
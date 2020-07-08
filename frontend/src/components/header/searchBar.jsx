import React from "react";
import "./splash.css";

class SearchBar extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <>
            <div className='searchBar'>
                <div>Your Store</div>
                <div>Games</div>
                <div>Software</div>
                <div>Hardware</div>
                <div>News</div>
                <div>Steam Labs</div>
                <input type="text" />
            </div>
            </>
        )
    }
}

export default SearchBar;
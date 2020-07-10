import React from "react";
// import "./splash.css";

class NavBar extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <>
            <div className='navBar'>
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

export default NavBar;
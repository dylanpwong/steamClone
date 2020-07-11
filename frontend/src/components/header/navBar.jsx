import React from "react";
// import "./splash.css";

class NavBar extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <>
            <div className="upperContainer">
            <div className='navBar'>
                <div className="navGrouper">
                    <div className="navbarItems">Your Store</div>
                    <div className="navbarItems">Browse</div>
                    <div className="navbarItems">News</div>
                </div>
                {/* <div className="navbarItems">Hardware</div>
                <div className="navbarItems">News</div>
                <div className="navbarItems">Steam Labs</div> */}
                <div className="searchbarContainer">
                <input placeholder="search the store" type="text" />

                </div>
            </div>
            </div>
            </>
        )
    }
}

export default NavBar;
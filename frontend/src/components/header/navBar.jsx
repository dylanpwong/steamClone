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
                <div className="searchIcon">
                    <img src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png"/>
                </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default NavBar;
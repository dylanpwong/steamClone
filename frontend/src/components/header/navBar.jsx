import React from "react";
import searchdropDown_container from "./searchdropDown_container";
import SearchDropDown from "./searchDropDown";
// import "./splash.css";

class NavBar extends React.Component {
    constructor (props) {
        super (props);
        this.onSearch=this.onSearch.bind(this);

        this.state={
            search: []
        }
    }

    onSearch(e){
        // debugger;
        e.preventDefault();
        let gameObj= {
            value: e.currentTarget.value,
        }
        this.props.searchGame(gameObj.value).then(res=>{
            // debugger
            this.setState({search: res.games})
        })
    }



    render () {
        return (
          <>
          
            <div className="upperContainer">
                <div className="navBar">
                    <div className="navGrouper">
                    <div className="navbarItems">Your Store</div>
                    <div className="navbarItems">Browse</div>
                    <div className="navbarItems">News</div>
                    </div>
                    {/* <div className="navbarItems">Hardware</div>
                    <div className="navbarItems">News</div>
                    <div className="navbarItems">Steam Labs</div> */}
                    <div className="dropDownHolder">
                    <div className="searchbarContainer">
                        <input onChange={this.onSearch} placeholder="search the store"type="text"/>
                        <div className="searchIcon">
                        <img className="searchImg"src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png" />
                        </div>
                    </div>
                        <SearchDropDown searchGames={this.state.search} />
                    </div>
                </div>
                 
            </div>
                
           
          </>
        );
    }
}

export default NavBar;
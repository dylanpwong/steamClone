import React from 'react';
import "./gamesLists.css";

class IndvGamesList extends React.Component{
    constructor(props){
        super(props);
        // debugger;
        this.state ={
            currentList: this.props.lists[this.props.listName]
        }
    }
// this.props.listName = "list name"
//this.props.list
    render(){
        // debugger;

        // use this.state.currentList
        console.log(this.state.currentList[0]);
        return(
            <>
            <div className="gamesList">
                <div>bleh</div>
            </div>
            </>
        )
    }
}

export default IndvGamesList;
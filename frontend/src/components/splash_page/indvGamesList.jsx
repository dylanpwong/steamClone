import React from 'react';


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
        return(
            <>
            
            </>
        )
    }
}

export default IndvGamesList;
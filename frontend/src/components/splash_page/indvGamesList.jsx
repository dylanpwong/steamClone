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

        // console.log(this.state.currentList);
        // we need a container to hold both left and right sides,
        //right side will hold the hover stuff,
        //left will hold games image
        const listOfGames = this.state.currentList.map((ele, idx)=>{
            return (
                
                <div key={idx} className="listGames">
                    <div className="listImg">
                        <img src = {ele.imgUrl}></img>
                    </div>
                    <div className="listDesc">
                        <div className="listTitle">{ele.title}</div>
                        <div className="listPrice">{ele.price}</div>
                    </div>
                </div>
                
            )
        })

        return(
            <>
            <div className="listContainer">
            <div className='leftContainer'>
                {listOfGames}
            </div>
            <div className='rightContainer'>
                <div>bleh</div>
            </div>
            </div>
            </>
        )
    }
}

export default IndvGamesList;
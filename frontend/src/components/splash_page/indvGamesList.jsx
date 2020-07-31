import React from 'react';
import "./gamesLists.css";

class IndvGamesList extends React.Component{
    constructor(props){
        super(props);
        // debugger;
        this.state ={
            currentList: this.props.lists[this.props.listName],
            updated: null
        }
        this.equalArray=this.equalArray.bind(this);
    }


    componentDidUpdate(){
        if(!this.equalArray(this.state.currentList,this.props.lists[this.props.listName])){
            // this.state.updated = "updated";
            this.setState({currentList: this.props.lists[this.props.listName]});
        }
    }
    equalArray(arr1,arr2){
        return (arr1.length == arr2.length && arr1.every((ele,idx)=> arr1[idx] == arr2[idx]))
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
import React from 'react';
import "./gamesLists.css";
import HoverGame from './hoverGame';

class IndvGamesList extends React.Component{
    constructor(props){
        super(props);
        // debugger;
        this.state ={
            currentList: this.props.lists[this.props.listName],
            currentGame: this.props.lists[this.props.listName][0],
        }
        this.equalArray=this.equalArray.bind(this);
        this.hoverChanger=this.hoverChanger.bind(this);
    }


    componentDidUpdate(){
        if(!this.equalArray(this.state.currentList,this.props.lists[this.props.listName])){
            document.getElementById("ListDesc").classList.add("hoveredSelected");
            document.getElementById("ListTitle").classList.add("hoverTitle2");
            document.getElementById("ListPrice").classList.add("hoverPrice");
            this.setState({currentGame: this.props.lists[this.props.listName][0],currentList: this.props.lists[this.props.listName]});
        }
    }
    equalArray(arr1,arr2){
        return (arr1.length == arr2.length && arr1.every((ele,idx)=> arr1[idx] == arr2[idx]))
    }
    hoverChanger(game){
        if(this.state.currentGame._id != game._id){
            return (e)=>{
                // debugger;
                if(document.getElementsByClassName("hoveredSelected").length >0 ) document.getElementsByClassName("hoveredSelected")[0].classList.remove("hoveredSelected");
                if(document.getElementsByClassName("hoverTitle2").length >0 ) document.getElementsByClassName("hoverTitle2")[0].classList.remove("hoverTitle2");
                if(document.getElementsByClassName("hoverPrice").length >0 ) document.getElementsByClassName("hoverPrice")[0].classList.remove("hoverPrice");
                e.currentTarget.children[1].classList.add("hoveredSelected");
                e.currentTarget.children[1].children[0].classList.add("hoverTitle2");
                e.currentTarget.children[1].children[1].classList.add("hoverPrice");
                this.setState({currentGame: game})
            }
        }
        // this.setState({currentGame:})
    }
    
// this.props.listName = "list name"
//this.props.list
    render(){

        // use this.state.currentList

        // console.log(this.state.currentList);
        // we need a container to hold both left and right sides,
        //right side will hold the hover stuff,
        //left will hold games image
        const listOfGames = this.state.currentList.map((ele, idx)=>{
            return (

                <div onMouseEnter={this.hoverChanger(ele)} key={idx} id = {ele} className="listGames">
                    <div className="listImg">
                        <img src = {ele.imgUrl}></img>
                    </div>
                    <div  id={'ListDesc'}className={`listDesc ${(idx === 0 ? 'hoveredSelected': '')}`}>
                        <div id={'ListTitle'}className={`listTitle ${idx ===0 ? 'hoverTitle2':''}`}>{ele.title}</div>
                        <div id={'ListPrice'}className={`listPrice ${idx ===0 ? 'hoverPrice':''}`}>{ele.price}</div>
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
                <HoverGame game={this.state.currentGame}/>
            </div>
            </div>
            </>
        )
    }
}

export default IndvGamesList;
import React from 'react';
import './dropDown.css';
import { withRouter } from 'react-router-dom';


class SearchDropDown extends React.Component{
    constructor(props){
        super(props)

        this.toGame = this.toGame.bind(this);
    }



    toGame(ele){
        return (e)=>{
            
        //    document.getElementById("searchbar").value="";
            // this.props.gameClickHandler();
            this.props.history.push(`/game/${ele._id}`);
        }
    }
    

    render(){
        let searchResults=this.props.searchGames.map(ele=>{
            return(
                <div  onClick={this.toGame(ele)}className="searchHoverFlexer" key={Math.random() * this.props.searchGames.length}>
                   <img className = "imgResizer"src={ele.imgUrl}/>
                    <div className="titleAndPriceforDropDown">
                        <div>
                            {ele.title}
                        </div>
                        <div>
                            {ele.price}
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <>
            <div className={(this.props.searchGames.length) >0? `dropdownContainer show` : 'dropdownContainer'}>
              
                {searchResults}
            </div>  
            </>
        )
    }
}
// withRouter
export default withRouter(SearchDropDown);
import React from 'react';
import './dropDown.css';


class SearchDropDown extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
        let searchResults=this.props.searchGames.map(ele=>{
            return(
                <div  className="searchHoverFlexer" key={Math.random() * this.props.searchGames.length}>
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
export default SearchDropDown;
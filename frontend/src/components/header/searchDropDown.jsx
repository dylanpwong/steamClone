import React from 'react';
import './dropDown.css';


class SearchDropDown extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let searchResults=this.props.searchGames.map(ele=>{
            return(
                <div  key={Math.random() * this.props.searchGames.length}>
                    {ele.title}
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
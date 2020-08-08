import React from 'react';
import SearchGameBox from './searchGameBox';


class SearchComponent extends React.Component{
    constructor(props){
        super(props)
         
    }

    render(){
         let searchResults = this.props.games.map((ele) => {
          return <SearchGameBox game={ele} key={Math.random() * this.props.games.length}/>;
         });
        return(
            <>
            <div>
                {searchResults}
            </div>
            </>
        )
    }
}

export default SearchComponent;
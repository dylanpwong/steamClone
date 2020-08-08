import React from 'react';
import Selector from './selector';

class SearchNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div className="navWrapper">
                <div>
                    <input className='searchNavInput' type="text"/>
                    <button className="searchButton">Search</button>
                </div>
                <div className='selectorWrapper'>
                    <div>Sort By</div>
                    <div className='selector'>
                        <Selector topic={this.props.topic}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default SearchNav
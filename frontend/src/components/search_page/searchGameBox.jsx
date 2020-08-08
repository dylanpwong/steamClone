import React from 'react';
import DateGetter from '../functions/date';

class SearchGameBox extends React.Component{
    constructor(props){
        super(props)

       
    }

    render(){
       
        
        return (
          <>
            <div className="searchGameBox">
              <img className='searchGameImg' src={this.props.game.imgUrl} />
              <div className='searchGameTitle'>{this.props.game.title}</div>
              <DateGetter className='searchDate'date={this.props.game.releaseDate} />
              <div>{this.props.game.price}</div>
            </div>
          </>
        );
       
    }
}
export default SearchGameBox;
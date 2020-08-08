import React from 'react';
import DateGetter from '../functions/date';
import { withRouter } from 'react-router-dom';

class SearchGameBox extends React.Component{
    constructor(props){
        super(props)

       this.toGame=this.toGame.bind(this);
    }

    toGame(){
      this.props.history.push(`/game/${this.props.game._id}`)
    }

    render(){
       
        
        return (
          <>
            <div onClick={this.toGame}className="searchGameBox">
              <img className='searchGameImg' src={this.props.game.imgUrl} />
              <div className='searchGameTitle'>{this.props.game.title}</div>
              <DateGetter className='searchDate'date={this.props.game.releaseDate} />
              <div>{this.props.game.price}</div>
            </div>
          </>
        );
       
    }
}
// withRouter
export default withRouter(SearchGameBox);
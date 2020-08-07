import React from 'react';
import GetDatef from '../functions/date.jsx';

class GameRightBox extends React.Component{
    constructor(props){
        super(props)
        this.reviewCalc=this.reviewCalc.bind(this);
        this.totalCalc=this.totalCalc.bind(this);
    }

    reviewCalc(){
        const total = this.props.game.downVotes + this.props.game.upVotes;
        const score = (total === 0 ) ? -1:this.props.game.upVotes/ (total);
        let rating="";
        switch (true) {
          case score < 0:
            rating = `No Reviews`;
            break;
          case score <= 25:
            rating = `OverWhelmingly Negative`;
            break;
          case score <= 40:
            rating = `Very Negative`;
            break;
          case score <= 65:
            rating = `Negative`;
            break;
          case score <= 75:
            rating = `Mixed`;
            break;
          case score <= 85:
            rating = `Mostly Positive`;
            break;
          case score <= 95:
            rating = `Very Positive`;
            break;
          case score <= 100:
            rating = `OverWhelmingly Positive`;
            break;
        }
        return <div className='ratingColor'>{rating}</div>
    }
    totalCalc(){
        // this.getDate();
        return `(${this.props.game.downVotes + this.props.game.upVotes})`;
    }
    // getDate(){
    //     const date = this.props.game.safetyDate;
    //      <GetDatef date = {date}/>
    //     // debugger
    // }

    render(){
        let genres = this.props.game.genres.map(ele=>{
            return(
                <div key={ele._id}className='genreBox'>
                    {ele.name}
                </div>
            )
        })
        return (
          <>
            <div>{this.props.game.description}</div>
            <div className="insideBox">
              <div className="insideLeftBox">
                <div className="leftText">ALL REVIEWS:</div>
                <div className="leftText">RELEASE DATE:</div>
                <div className="leftText">DEVELOPER:</div>
              </div>
              <div className="insideRightBox">
                  <div className="reviewRatingHolder rightText">{this.reviewCalc()}&nbsp;{this.totalCalc()}</div>
                  <div className="rightText"><GetDatef date={this.props.game.safetyDate}/> </div>
                  <div className="rightText">{this.props.game.developer}</div>
              </div>
            </div>
            <div className="miscTagDesc">Popular user-defined tags for this product:</div>
            <div className='genreHolder'>{genres}</div>
          </>
        );
    }
}

export default GameRightBox;
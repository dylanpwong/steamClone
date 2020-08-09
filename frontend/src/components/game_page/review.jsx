import React from'react';
import DateGetter from '../functions/date';


class Review extends React.Component{
    constructor(props){
        super(props);

        this.state={
          thumbsUp:"https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsUp_v6.png",
          thumbsDown:"https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsUp_v6.png",
        }

        this.thumbsDecider=this.thumbsDecider.bind(this);
    }

    thumbsDecider(rev){
      if(rev.recommendation){
        return this.state.thumbsUp;
      }else{
        return this.state.thumbsDown;
      }
    }

    strShuffler(str){
      let arr = str.split("");
      let result= arr.sort((a,b)=> Math.random()<.5? -1:1);
      // debugger;
      return result.join("");
    }

    render(){
      // debugger
      if(this.props.rev.length==0) {
        return(
          <>
          no reviews
          </>
        )
      }

      let reviews = this.props.rev.map(ele=>{
        // debugger;
        return(
          
          <div key={ this.strShuffler(ele._id)}>
            <div className="reviewTop">
              <div className="thumbsContainer">
                  <img src={this.thumbsDecider(ele)}/>
              </div>
                  <div>{ele.recommendation? "Recommended": "Not Recommended"}</div>
            </div>
            <div className='dateWrapper'>
              POSTED ON: &NBSP;
              <DateGetter date={ele.date}/>
            </div>

            <div>
              {ele.content}
            </div>
          </div>
          
        )
      }) 
        return (
          <>
            <div className="reviewsWrapper GamesContentsWrapper">
              <div className="aboutHeader">Customer Reviews</div>

              <div className="reviewContentWrapper">
                {reviews}
              </div>
            </div>
          </>
        );
    }
}

export default Review;
import React from'react';
import DateGetter from '../functions/date';



class Review extends React.Component{
    constructor(props){
        super(props);

        this.state={
          thumbsUp:"https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsUp_v6.png",
          thumbsDown: "https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsDown_v6.png",
          
        }

        this.thumbsDecider=this.thumbsDecider.bind(this);
    }

    thumbsDecider(rev){
      // debugger
      if(rev){
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
          <div className='aboutHeader'>
          No Reviews
          </div>
        )
      }

      let reviews = this.props.rev.map(ele=>{
        // debugger;
        return (
          <div className='reviewHolder'key={this.strShuffler(ele._id)}>
            <div className='leftSideReview'>
              <img className='userImgSize' src={ele.user[0].profilePicture} />
              <div>{ele.user[0].username}</div>
            </div>
            <div className='rightSideReview'>
              <div className="reviewTop">
                <div className="thumbsContainer">
                  <img src={this.thumbsDecider(ele.recommendation)} />
                </div>
                <div className="recSpace">
                  {ele.recommendation ? "Recommended" : "Not Recommended"}
                </div>
              </div>
              <div className='contentHalf'>
              <div className="dateWrapper">
                POSTED ON: &nbsp;
                <DateGetter date={ele.date} />
              </div>

              <div className="reviewContentWrapper">{ele.content}</div>
              </div>
              <div className="reviewButtonHolder">
                <div>Was This review Helpful?</div>

                <div className="reviewHelpfulButtons">
                  <div>Yes</div>
                  <div>No</div>
                  <div> Funny</div>
                </div>
                <div className="helpful">
                  <div>
                    {ele.helpfulYes}&nbsp; people found this review helpful
                  </div>
                  <div>
                    {ele.helpfulFunny}&nbsp; people found this review funy
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
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
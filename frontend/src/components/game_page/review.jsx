import React from'react';


class Review extends React.Component{
    constructor(props){
        super(props);

        this.state={
          thumbsUp:"https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsUp_v6.png",
          thumbsDown:"https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsUp_v6.png",
        }
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

      }) 
        return (
          <>
            <div className="reviewsWrapper GamesContentsWrapper">
              <div className="aboutHeader">Customer Reviews</div>

              <div className="reviewContentWrapper">
                  <div>

                  </div>
                  <div>
                    <div> 
                      
                    </div>
                    {this.props.rev[0].content}
                  </div>
              </div>
            </div>
          </>
        );
    }
}

export default Review;
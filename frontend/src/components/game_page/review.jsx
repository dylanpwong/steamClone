import React from'react';


class Review extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
          <>
            <div className="reviewsWrapper GamesContentsWrapper">
              <div className="aboutHeader">Customer Reviews</div>

              <div>Reviews go here</div>
            </div>
          </>
        );
    }
}

export default Review;
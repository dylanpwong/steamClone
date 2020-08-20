import React from 'react';

class WriteReview extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userReviews: this.props.user ? {...this.props.user.reviews} : null,
            review: null,
            response: null,
            hasGame: null,
        }
        this.haveReview=this.haveReview.bind(this);
    }
    componentDidMount(){
        this.haveReview();
    }


    haveReview(){
        
        // const reviewGames = Object.assign({},{[this.props.user.reviewList[0]]:""});
        const data={
            userId: this.props.user.id,
            gameId: this.props.game._id
        }
        if(this.props.user){
            this.props.checkReview(data).then(res=>{
                // debugger
                this.setState({review: res.info.review,hasGame: res.info.hasGame})
            })
        }
    
    }

    render(){
        if(!this.props.user) {
            // console.log("Current user is null");
            return <> </>
        }
        // this.haveReview();
        // debugger;
        if(!this.state.hasGame) return <> </>
        return (
          <>
            <div className="reviewWriteHolder">
              <div>
                <div>Write a Review for {this.props.game.title}</div>
                <div>
                  Please describe what you liked or disliked about this game and
                  whether you recommend it to others. Please remember to be
                  polite and follow the Rules and Guidelines.
                </div>
              </div>

              <div>
                <div></div>

                <form>
                  <textarea type="text" name="" id="" />
                  <input type="submit" value="Post Review" />
                </form>
              </div>
            </div>
          </>
        );
    }
}
export default WriteReview;
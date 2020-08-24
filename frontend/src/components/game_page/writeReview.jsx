import React from 'react';

class WriteReview extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userReviews: this.props.user ? {...this.props.user.reviews} : null,
            review: null,
            content: null,
            response: null,
            hasGame: null,
            initial: null,
        }
        this.haveReview=this.haveReview.bind(this);
        this.reviewEditor=this.reviewEditor.bind(this);
        this.submitHandeler=this.submitHandeler.bind(this);
    }
    componentDidMount(){
        this.haveReview();
    }

    reviewEditor(e){
       const  val = e.currentTarget.value;
       this.setState({content: val});
    }
    submitHandeler(e){
        const toBeSub = {
            content: this.state.content,
            gameId: this.props.game._id,
            userId: this.props.user.id,
            reviewId: this.state.review._id
        }
        this.props.editReview(toBeSub)
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
                if(res.info.review){
                    this.setState({review: res.info.review,
                        hasGame: res.info.hasGame,
                        content: res.info.review.content,
                        initial: "Edit"
                    })
                }else{
                    this.setState({
                      review: res.info.review,
                      hasGame: res.info.hasGame,
                      content: res.info.review.content,

                    });
                }
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
        // debugger;
        return (
          <>
                <div className="alreadyIn">
                    {this.props.game.title}&nbsp; is already in your Library
                </div>
            <div className="reviewWriteHolder">
              <div>
                <div className="reviewTitle">Write a Review for {this.props.game.title}</div>
                <div className='writeColor'>
                  Please describe what you liked or disliked about this game and
                  whether you recommend it to others. Please remember to be
                  polite and follow the Rules and Guidelines.
                </div>
              </div>

              <div className='textboxAndPicHolder'>
                <div></div>

                <form onSubmit={this.submitHandeler}> 
                  <textarea onChange={this.reviewEditor} className="writeReviewText"type="text" value={this.state.content} />
                  <div className='flexender'>
                  <input className="postButtoncss" type="submit" value={this.state.initial? "Edit Review" : "Post Review"} />

                  </div>
                </form>
              </div>
            </div>
          </>
        );
    }
}
export default WriteReview;
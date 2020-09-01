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
            rec: "yes",
            thumbsUp:"https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsUp_v6.png",
            thumbsDown: "https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsDown_v6.png",
        }
        this.haveReview=this.haveReview.bind(this);
        this.reviewEditor=this.reviewEditor.bind(this);
        this.submitHandeler=this.submitHandeler.bind(this);
        this.recYesNo=this.recYesNo.bind(this);
    }
    componentDidMount(){
        this.haveReview();
    }

    recYesNo(type){
        return (e)=>{
            const sel = e.currentTarget.id;
            if(sel == "deselectYes"){
                document.getElementById("deselectNo").classList.remove("butSelected")
            }
            else{
                document.getElementById("deselectYes").classList.remove("butSelected")
            }
            e.currentTarget.classList.add("butSelected");
            
            this.setState({rec: [type]})
        }
    }

    reviewEditor(e){
       const  val = e.currentTarget.value;
       this.setState({content: val});
    }
    submitHandeler(e){
        const toBeSub = {
          content: this.state.content,
          rec: this.state.rec,
          gameId: this.props.game._id,
          userId: this.props.user.id,
          reviewId: this.state.review? this.state.review._id: null,
        };
        // debugger;
        if(toBeSub.content ==""){
            toBeSub.content=toBeSub.rec=="yes"?`${this.props.user.username} likes this!`: `${this.props.user.username} dislikes this!`
        }
        if(this.state.initial){
            this.props.editReview(toBeSub).then(res=>{
                // debugger;
                window.location.reload();
            });
        }else{
            this.props.createReview(toBeSub).then(res=>{
                // debugger;
               window.location.reload();
            });
        }
    }


    haveReview(){
        
        // const reviewGames = Object.assign({},{[this.props.user.reviewList[0]]:""});
        const data = {
            userId: this.props.user ? this.props.user.id ? this.props.user.id : this.props.user._id : null,
          gameId: this.props.game? this.props.game._id: null,
        };
        // debugger;
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
                      content: "",

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
                      <div>
                          Do you recommend this game?
                          <div className='buttonSpacer'>
                              <div id="deselectYes"onClick={this.recYesNo("yes")} className="recProp">
                                  {/* <img src={this.state.thumbsUp}></img> */}
                                  Yes
                                </div>
                              <div id="deselectNo"onClick={this.recYesNo("no")}className="recProp">No</div>
                          </div>
                      </div>
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
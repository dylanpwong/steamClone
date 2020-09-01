import React from 'react';
import './gPage.css';
import gamePage_container from './gamePage_container';
import GameImgs from './gamePageImgs';
import GameRightBox from './gameRightBox';
import SystemReq from './systemReq';
import AboutGame from './aboutGame';
import SystemReqWrapper from './systemReqWrapper';
import Review from './review';
import RightGameDesc from './rightGameDesc';
import WriteReview from './writeReview';

class GamePage extends React.Component {
    constructor(props) {
        super (props);
        this.state={
            render: false,
            game: null,
            leavePage: "",
            cart: null
        }
    }

    // Runs after render runs first, fetches game then rerenders.
    componentDidMount () {
      
      if(this.state.leavePage==""){
        this.props.fetchGame(this.props.gameId).then((res)=>{
          // debugger;
            if(!res.game){
              this.props.history.push("/")
            }else{
               if(this.props.currentUser &&this.props.currentUser.cart.filter(ele=>ele._id===this.props.gameId).length >=1){
                this.setState({render: true,game: res.game,cart: true})
               }else{
                 this.setState({render: true,game: res.game});
               }
            }
        })
      }
        // console.log("IN GAME PAGE");
    }
    componentDidUpdate(){
      
        if((this.state.leavePage =="")&& (!this.state.game || this.state.game._id != this.props.gameId)){
              this.props.fetchGame(this.props.gameId).then((res)=>{
            this.setState({render: true,game: res.game});
            // debugger;
            // this.setState({game: res.game});
        })
        }
    }
    componentWillUnmount(){
      this.state.leavePage = "Don't Render";
    }

    toCart(){
      let currGame ={
          userId: this.props.currentUser._id,
          gameId: this.props.gameId 
      } 
      
        this.props.addToCart(currGame).then(res=>{
            this.props.history.push('/cart');
        })
      

    }

    render () {
        if (!this.state.render){
            return(
                <>
                Loading ...
                </>
            )
        } else{
            // debugger;
              return (
                <>
                  <div className="gameProfile">
                    

                    <div className='titleAndImgHolder'>
                   
                      <div className="title">{this.state.game.title}</div>

                      <div className="imageProfile">
                        {/* <img src={this.state.game.imgUrl} /> */}
                        <GameImgs gameImg={this.state.game.imgUrl} otherImgs={this.state.game.otherImgs} game={this.state.game}/>
                        <div className="imageRightProf">
                          <img src={this.state.game.imgUrl} />
                          <div className="gameSynopsis">
                            <GameRightBox game={this.state.game}/>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div className='reviewWriteSpacer'> {/*/ write a review container */}
                      <WriteReview createReview={this.props.createReview} editReview={this.props.editReview} checkReview={this.props.checkReview}game = {this.state.game}user={this.props.currentUser}/>
                      </div>
                    <div className='gameDescWrapper'>
                    <div className="gameDesc">
                      <div className="buyContainer">
                        <div>Buy {this.state.game.title}</div>
                        <div className="buyGame">
                          <div className="blackBox">
                            <div className="priceBox">
                              {this.state.game.price}
                            </div>
                            <div onClick={this.state.cart? null:this.toCart.bind(this)} className="buyButton">{this.state.cart? "Already In Cart": "Add to Cart"}</div>
                          </div>
                        </div>
                      </div>

                      <div className="aboutDesc">
                        
                        <AboutGame game={this.state.game}/>
                        <SystemReqWrapper game={this.state.game}/>
                        
                        
                        <Review rev= {this.state.game.reviews}/>
                        
                      </div>
                    </div>
                    <RightGameDesc game={this.state.game}/>
                    
                    </div>
                  </div>
                </>
              );

        }
    }
}

export default GamePage;
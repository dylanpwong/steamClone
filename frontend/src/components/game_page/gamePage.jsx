import React from 'react';
import './gPage.css';
import gamePage_container from './gamePage_container';
import GameImgs from './gamePageImgs';
import GameRightBox from './gameRightBox';

class GamePage extends React.Component {
    constructor(props) {
        super (props);
        this.state={
            render: false,
            game: null
        }
    }

    // Runs after render runs first, fetches game then rerenders.
    componentDidMount () {
        this.props.fetchGame(this.props.gameId).then((res)=>{
            this.setState({render: true,game: res.game});
            // debugger;
            // this.setState({game: res.game});
        })
        // console.log("IN GAME PAGE");
    }
    componentDidUpdate(){
        if(this.state.game._id != this.props.gameId){
              this.props.fetchGame(this.props.gameId).then((res)=>{
            this.setState({render: true,game: res.game});
            // debugger;
            // this.setState({game: res.game});
        })
        }
    }

    render () {
        if (!this.state.render){
            return(
                <>
                </>
            )
        } else{
            // debugger;
              return (
                <>
                  <div className="gameProfile">
                    <div>GAMES PAGE</div>
                    <div className="title">{this.state.game.title}</div>

                    <div className="imageProfile">
                      {/* <img src={this.state.game.imgUrl} /> */}
                      <GameImgs gameImg={this.state.game.imgUrl} otherImgs={this.state.game.otherImgs} />
                      <div className="imageRightProf">
                        <img src={this.state.game.imgUrl} />
                        <div className="gameSynopsis">
                          <GameRightBox game={this.state.game}/>
                        </div>
                      </div>
                    </div>

                    <div className="gameDesc">
                      <div className="buyContainer">
                        <div>Buy {this.state.game.title}</div>
                        <div className="buyGame">
                          <div className="blackBox">
                            <div className="priceBox">
                              {this.state.game.price}
                            </div>
                            <div className="buyButton">Add to Cart</div>
                          </div>
                        </div>
                      </div>

                      <div className="aboutDesc">
                        <div className="aboutHeader">About This Game</div>
                        <br></br>
                        <div>Description goes here</div>
                        <br></br>

                        <div className="aboutHeader">System Requirements</div>
                        <br></br>
                        <div>System requirements go here</div>
                        <br></br>

                        <div className="aboutHeader">Customer Reviews</div>
                        <br></br>
                        <div>Reviews go here</div>
                      </div>
                    </div>
                  </div>
                </>
              );

        }
    }
}

export default GamePage;
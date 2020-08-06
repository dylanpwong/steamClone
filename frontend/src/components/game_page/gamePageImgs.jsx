import React, { useState } from 'react';
import { set } from 'mongoose';

//React Hooks
class GameImgs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gameId: this.props.game._id,
            imgIndex: 0,
            allImgs : [this.props.gameImg,...this.props.otherImgs]
        }

        this.timer=this.timer.bind(this);
    }

componentDidUpdate(){
    if(this.props.game._id != this.state.gameId){
        this.setState({gameId: this.props.game._id,imgIndex:0,allImgs : [this.props.gameImg,...this.props.otherImgs]})
    }
}

timer(){
   if(this.state.imgIndex < this.state.allImgs.length - 1) this.setState({imgIndex : this.state.imgIndex + 1})
   else this.setState({ imgIndex: 0 });

}
componentDidMount(){
    setInterval(this.timer, 5000);
}

componentWillUnmount(){
    clearInterval();
}

render(){

    return (
      <>
        <img src={this.state.allImgs[this.state.imgIndex]} />
    {/* <div>{this.state.imgIndex}</div> */}
      </>
    );
}
}
export default GameImgs;
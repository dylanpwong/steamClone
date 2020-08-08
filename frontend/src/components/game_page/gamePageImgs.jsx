import React, { useState } from 'react';



class GameImgs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gameId: this.props.game._id,
            imgIndex: 0,
            allImgs : [this.props.gameImg,...this.props.otherImgs],
            stopRender: ""
        }

        this.timer=this.timer.bind(this);
    }

componentDidUpdate(){
    if((this.state.stopRender =="")&& this.props.game._id != this.state.gameId){
        this.setState({gameId: this.props.game._id,imgIndex:0,allImgs : [this.props.gameImg,...this.props.otherImgs]})
    }
}

timer(){
   if(this.state.imgIndex < this.state.allImgs.length - 1) this.setState({imgIndex : this.state.imgIndex + 1})
   else this.setState({ imgIndex: 0 });

}
componentDidMount(){
    if(this.stopRender==""){
        setInterval(this.timer, 5000);
    }
}

componentWillUnmount(){
    this.state.stopRender= "Don't Render";
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
import React from 'react';



class AboutGame extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
          <>
            <div className="aboutThisGame GamesContentsWrapper">
              <div className="aboutHeader">About This Game</div>
              <div>{this.props.game.about}</div>
              <img src={this.props.game.gif} />
            </div>
          </>
        );
    }
}

export default AboutGame;
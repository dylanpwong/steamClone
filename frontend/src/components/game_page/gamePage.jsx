import React from 'react';
import './gPage.css';
import gamePage_container from './gamePage_container';

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
        this.props.Helltaker().then((res)=>{
            this.setState({render: true,game: res.game});
            // debugger;
            // this.setState({game: res.game});
        })
        // console.log("IN GAME PAGE");
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
                    <div className='title'>{this.state.game.title}</div>
                    <img src={this.state.game.imgUrl}/>
                    <div> Buy {this.state.game.title}</div>
                  </div>
                  
                </>
              );

        }
    }
}

export default GamePage;
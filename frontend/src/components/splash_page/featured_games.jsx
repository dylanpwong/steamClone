import React from 'react';
import './splash.css';
import { withRouter } from 'react-router-dom';

class FeaturedGames extends React.Component{
    constructor(props){
        super(props)

        this.state={
            gameIndex: 0,
            leavePage:false
        }
        this.timer=this.timer.bind(this);
        this.toGame = this.toGame.bind(this);
    }

    componentDidMount(){
        //  this._isMounted = true;
        setInterval(this.timer,3000);
    }
    timer(){
        // console.log(this.state.gameIndex);
        if(!this.state.leavePage){
            if(this.state.gameIndex < this.props.games.length - 1){
                this.setState({gameIndex: this.state.gameIndex + 1});
            }else{
                this.setState({gameIndex: 0})
            }
        }else{
            clearInterval();
        }
    }

    toGame(gameId){
        return()=>{
            this.state.leavePage=true;
            clearInterval();
            this.props.history.push(`/game/${gameId}`);
        }
    }

    componentWillUnmount(){
        this.state.leavePage = true;
        clearInterval();
    }

    render(){
        // const gamesImage= this.props.games.map((ele)=><img onClick={this.toGame(ele._id)} src={ele.imgUrl}></img>);
        // const gamesTitle= this.props.games.map((ele)=><div>{ele.title}</div>);
        // const gamesPrice= this.props.games.map((ele)=><div>{ele.price}</div>);

        // Alternate
        const gamesImage= this.props.games.map((ele)=>{
            return (
              <>
                <img onClick={this.toGame(ele._id)} src={ele.imgUrl}></img>
                <div className="gameInfo">
                  {/* <div className='infoHeading'><div>{ele.title}</div></div>
                <div className='infoPrice'><div>{ele.price}</div></div> */}
                  <div className='infoHeading'>{ele.title}</div>
                  <div className='infoPrice'>{ele.price}</div>
                </div>
              </>
            );
        });

        return(
            <>
                {gamesImage[this.state.gameIndex]}
            {/* <div className='gameInfo'>
                <div className='infoHeading'>{gamesTitle[this.state.gameIndex]}</div>
                <div className='infoPrice'>{gamesPrice[this.state.gameIndex]}</div>
            </div> */}
            </>
        )
    }
}
// withRouter
export default withRouter(FeaturedGames)
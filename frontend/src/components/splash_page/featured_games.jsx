import React from 'react';
import './splash.css';

class FeaturedGames extends React.Component{
    constructor(props){
        super(props)

        this.state={
            gameIndex: 0
        }
        this.timer=this.timer.bind(this);
        this.toGame = this.toGame.bind(this);
    }

    componentDidMount(){
        setInterval(this.timer,3000)
    }
    timer(){
        console.log(this.state.gameIndex);
        if(this.state.gameIndex < this.props.games.length - 1){
            this.setState({gameIndex: this.state.gameIndex + 1});
        }else{
            this.setState({gameIndex: 0})
        }
    }

    toGame(gameId){
        this.history.push();
    }

    render(){
        const gamesImage= this.props.games.map((ele)=><img src={ele.imgUrl}></img>);
        const gamesTitle= this.props.games.map((ele)=><div>{ele.title}</div>);
        const gamesPrice= this.props.games.map((ele)=><div>{ele.price}</div>);

        return(
            <>
                {gamesImage[this.state.gameIndex]}
            <div className='gameInfo'>
                <div className='infoHeading'>{gamesTitle[this.state.gameIndex]}</div>
                <div className='infoPrice'>{gamesPrice[this.state.gameIndex]}</div>
            </div>
            </>
        )
    }
}
export default FeaturedGames
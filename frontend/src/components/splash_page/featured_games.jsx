import React from 'react';

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
        const gamesList= this.props.games.map((ele)=><img src={ele.imgUrl}></img>);
        
        return(
            <>
                {gamesList[this.state.gameIndex]}
            </>
        )
    }
}
export default FeaturedGames
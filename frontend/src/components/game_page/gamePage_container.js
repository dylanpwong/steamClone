import { connect } from "react-redux"
import GamePage from "./gamePage"
import {  } from "../../actions/session_actions"
import { fetchHelltaker, fetchGame } from "../../actions/game_actions"


const mapStateToProps=(state,ownProps)=>{
    
    return({
        gameId: ownProps.match.params.gameId
        // gameHelltaker: state.entities.game
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        Helltaker: () => dispatch(fetchHelltaker()),
        fetchGame:(gameId) =>dispatch(fetchGame(gameId)),
        //hello: () => console.log("Hello")
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(GamePage)
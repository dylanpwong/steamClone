import { connect } from "react-redux"
import GamePage from "./gamePage"
import {  } from "../../actions/session_actions"
import { fetchHelltaker } from "../../actions/game_actions"


const mapStateToProps=(state)=>{
    // debugger
    return({
        gameHelltaker: state.entities.game
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        Helltaker: () => dispatch(fetchHelltaker())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(GamePage)
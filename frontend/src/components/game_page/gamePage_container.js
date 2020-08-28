import { connect } from "react-redux"
import GamePage from "./gamePage"
import {  } from "../../actions/session_actions"
import { fetchHelltaker, fetchGame, userhasGame, addToCart } from "../../actions/game_actions"
import { editReview, createReview, } from "../../actions/review_actions"


const mapStateToProps=(state,ownProps)=>{
    
    return({
        gameId: ownProps.match.params.gameId,
        currentUser: state.session.user
        // gameHelltaker: state.entities.game
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        Helltaker: () => dispatch(fetchHelltaker()),
        fetchGame:(gameId) =>dispatch(fetchGame(gameId)),
        checkReview: (data)=>dispatch(userhasGame(data)),
        editReview: (data)=>dispatch(editReview(data)),
        createReview: (data)=>dispatch(createReview(data)),
        addToCart: (data)=>dispatch(addToCart(data))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(GamePage)
import { connect } from "react-redux"
import GameList from "./gameList"

const { RECEIVE_POPULAR, RECEIVE_TOPRATED, RECEIVE_TOPSELLERS } = require("../../actions/game_actions")





const mapStateToProps=state=>{
    return({
        newAndTrending: state.entities.games.RECEIVE_RANDOM,
        topRated: state.entities.games.RECEIVE_TOPRATED,
        popular: state.entities.games.RECEIVE_POPULAR,
        topSellers: state.entities.games.RECEIVE_TOPSELLERS,
        releaseDate: state.entities.games.RECEIVE_RELEASEDATE,
    })
}
const mapDispatchToProps=(distpatch)=>{
    return({})
}

export default connect(mapStateToProps,mapDispatchToProps)(GameList)
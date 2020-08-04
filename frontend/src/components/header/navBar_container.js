import { connect } from "react-redux"
import NavBar from "./navBar"
import { searchGame } from "../../actions/game_actions"



const mapStateToProps = (state)=>{
    return {
      searchGames: state.entities.RECIEVE_SEARCH ? Object.values(state.entities.RECIEVE_SEARCH): [],
    };
}

const  mapDispatchToProps = dispatch=>{
    return({
        searchGame: (game)=> dispatch(searchGame(game))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
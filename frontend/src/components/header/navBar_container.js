import { connect } from "react-redux"
import NavBar from "./navBar"
import { searchGame } from "../../actions/game_actions"



const mapStateToProps = (state)=>{
    return({})
}

const  mapDispatchToProps = dispatch=>{
    return({
        searchGame: (game)=> dispatch(searchGame(game))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
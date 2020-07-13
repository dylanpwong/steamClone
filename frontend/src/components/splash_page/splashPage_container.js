import { connect } from "react-redux"
import SplashPage from "./splashPage"
import { logout } from "../../actions/session_actions"
import { getRandom } from "../../actions/game_actions"


const mapStateToProps=(state)=>{
    // debugger
    return({
        currentUser: (state.session.user)?  state.session.user : null,
        // games:
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        logout: ()=>dispatch(logout()),
        fetchGames: ()=>dispatch(getRandom())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage)
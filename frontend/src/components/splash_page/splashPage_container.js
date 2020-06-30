import { connect } from "react-redux"
import SplashPage from "./splashPage"
import { logout } from "../../actions/session_actions"


const mapStateToProps=(state)=>{
    // debugger
    return({
        currentUser: (state.session.user)?  state.session.user : null
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        logout: ()=>dispatch(logout())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage)
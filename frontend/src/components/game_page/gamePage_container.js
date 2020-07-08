import { connect } from "react-redux"
import GamePage from "./gamePage"
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

export default connect(mapStateToProps,mapDispatchToProps)(GamePage)
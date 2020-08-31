import { connect } from "react-redux" // place in frontend that has data
import HeaderPage from "./header"
import { logout } from "../../actions/session_actions"
import { getCart } from "../../actions/game_actions.js"

// Takes items from state and allows to use in frontend as props
const mapStateToProps=(state)=>{    
    // debugger
    return({
        currentUser: (state.session.user)?  state.session.user : null
    })
}

// Allows you to do functions
const mapDispatchToProps=(dispatch)=>{
    return({
        logout: ()=>dispatch(logout()),
        getCart: (data) =>dispatch(getCart(data)),
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderPage)
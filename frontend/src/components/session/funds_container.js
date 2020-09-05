import {connect} from "react-redux"
import fundsPage from "./fundsPage.jsx"
import { addBalance } from "../../actions/session_actions.js"

const mapStateToProps = (state)=>{
    // debugger
    return{
        errors: state.errors.session,
        currentUser: state.session.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addBalance: (user)=>dispatch(addBalance(user))
    };

}

export default connect(mapStateToProps,mapDispatchToProps)(fundsPage)

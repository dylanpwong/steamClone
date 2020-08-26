import CompleteSignUp from "./complete_signup"
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions"


const mapStatetoProps =(state)=>{
    // debugger;
    return{
        email: state.entities.savedEmail
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        signup: (user)=>(dispatch(signup(user)))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(CompleteSignUp);
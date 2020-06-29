import { signup } from "../../actions/session_actions"
import { connect } from "react-redux"
import SignupForm from "./signup_form"



const mapStateToProps= (state)=>{
    return{
        errors: state.errors.session
    }
}

const mapDisptachToProps = (dispatch)=>{
    return{
        signup: user => dispatch(signup(user))
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(SignupForm);
import {connect} from "react-redux"
import fundsPage from "./fundsPage.jsx"

const mapStateToProps = (state)=>{
    // debugger
    return{
        errors: state.errors.session,
        currentUser: state.session.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    };

}

export default connect(mapStateToProps,mapDispatchToProps)(fundsPage)

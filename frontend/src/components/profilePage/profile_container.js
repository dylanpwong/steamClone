import { connect } from "react-redux"; 
import ProfilePage from "./profile";
import { getUser } from "../../actions/session_actions";

const mapStateToProps=(state,ownProps)=>{
    return{
        userId:  ownProps.match.params.profileId,
        user: state.session.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUser: (data)=>dispatch(getUser(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)
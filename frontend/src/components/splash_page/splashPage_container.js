import { connect } from "react-redux"
import SplashPage from "./splashPage"


const mapStateToProps=(state)=>{
    return({
        currentUser: state.session.currentUser
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage)
import {connect} from "react-redux"
import AboutSteamPage from "./aboutSteamPage.jsx"

const mapStateToProps = (state)=>{
    // debugger
    return{
        errors: state.errors.session
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{};

}

export default connect(mapStateToProps,mapDispatchToProps)(AboutSteamPage)

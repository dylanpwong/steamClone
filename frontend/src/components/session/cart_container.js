import {connect} from "react-redux"
import cartPage from "./cartPage.jsx"

const mapStateToProps = (state)=>{
    // debugger
    return{
        errors: state.errors.session
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{};

}

export default connect(mapStateToProps,mapDispatchToProps)(cartPage)

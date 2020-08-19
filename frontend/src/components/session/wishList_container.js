import {connect} from "react-redux"
import wishListPage from "./wishListPage.jsx"

const mapStateToProps = (state)=>{
    // debugger
    return{
        errors: state.errors.session
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{};

}

export default connect(mapStateToProps,mapDispatchToProps)(wishListPage)

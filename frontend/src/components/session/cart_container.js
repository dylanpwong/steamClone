import {connect} from "react-redux"
import cartPage from "./cartPage.jsx"
import { getCart, removeFromCart } from "../../actions/game_actions.js"

const mapStateToProps = (state)=>{
    // debugger
    return{
        errors: state.errors.session,
        currentUser: state.session.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCart: (data) =>dispatch(getCart(data)),
        removeFromCart: (data) => dispatch(removeFromCart(data))
    };

}

export default connect(mapStateToProps,mapDispatchToProps)(cartPage)

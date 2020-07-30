import { connect } from "react-redux"
import SplashPage from "./splashPage"
import { logout } from "../../actions/session_actions"
import { getRandom, getPopular, getTopRated, getTopSellers, getReleaseDate } from "../../actions/game_actions"


const mapStateToProps=(state)=>{
    // debugger
    return({
        currentUser: (state.session.user)?  state.session.user : null,
        // games:
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        logout: ()=>dispatch(logout()),
        fetchGames: ()=>dispatch(getRandom()),
        getPopular: ()=>dispatch(getPopular()),
        getTopRated: ()=>dispatch(getTopRated()),
        getTopSellers: ()=>dispatch(getTopSellers()),
        getReleaseDate: ()=> dispatch(getReleaseDate()),
        getAllLists: ()=> {
            activateLists(dispatch);
            // dispatch=>(getRandom().then(console.log("async")));
            // dispatch(getPopular());
            // dispatch(getTopRated());
            // dispatch(getReleaseDate());
            // dispatch(getTopSellers());
        }
    })
}
const activateLists=(dispatch)=>{
      getRandom().then(console.log("async"));
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage)
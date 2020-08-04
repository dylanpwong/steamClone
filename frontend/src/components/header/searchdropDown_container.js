import { connect } from "react-redux"
// import NavBar from "./navBar"
import SearchDropDown from "./searchDropDown"


const mapStateToProps = state =>{
    return({
        searchGames: Object.values(state.entities.RECIEVE_SEARCH)
    })
}

const mapDispatchToProps = dispatch=>{
    return({

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchDropDown);
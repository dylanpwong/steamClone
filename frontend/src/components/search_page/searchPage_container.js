import { connect } from "react-redux"
import SearchPage from "./searchPage"
import { searchGame } from "../../actions/game_actions"


const mapStateToProps = (state,ownProps)=>{
    return({
        search: ownProps.match.params.searchField,
        category: ownProps.match.params.orderBy
    })
}

const mapDispatchToProps= dispatch=>{
    return({
        searchGame: (search)=>dispatch(searchGame(search))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)
import { connect } from "react-redux"
import FeaturedGames from "./featured_games"



const mapStateToProps = (state)=>{
    // debugger
    return{
        games: Object.values(state.entities.games)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{};

}
// const FeaturedContainer = (props)=>{
//     return connect(mapStateToProps, mapDispatchToProps)(FeaturedGames);
// }
export default connect(mapStateToProps,mapDispatchToProps)(FeaturedGames)
// export default FeaturedContainer;
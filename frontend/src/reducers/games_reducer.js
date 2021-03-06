import { RECEIVE_GAME, RECEIVE_PLENTY, RECEIVE_POPULAR, RECEIVE_RELEASEDATE, RECEIVE_TOPRATED, RECEIVE_TOPSELLERS, RECEIVE_SEARCH } from '../actions/game_actions'

const gameReducer = (state={}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type) {
        case RECEIVE_GAME:
                const game = ((!action.games)? "No Game":action.game._id)
            return {[game]: action.game};
            break;
        case RECEIVE_PLENTY:
            return Object.assign({},state,{'RECEIVE_RANDOM': action.games});
        case RECEIVE_POPULAR:
            return Object.assign({},state,{RECEIVE_POPULAR: action.games});
        case RECEIVE_RELEASEDATE:
            return Object.assign({}, state,{RECEIVE_RELEASEDATE: action.games});
        case RECEIVE_TOPRATED:
            return Object.assign({}, state,{RECEIVE_TOPRATED: action.games});
        case RECEIVE_TOPSELLERS:
            return Object.assign({}, state, { RECEIVE_TOPSELLERS: action.games });
        case RECEIVE_SEARCH:
            return Object.assign({},state,{RECEIVE_SEARCH: action.games});
        default:
            return state;

    } 
}

export default gameReducer;
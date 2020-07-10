import { RECEIVE_GAME, RECEIVE_PLENTY } from '../actions/game_actions'

const gameReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_GAME:
            return {[action.game.title]: action.game};
            break;
        case RECEIVE_PLENTY:
            return Object.assign({},state,action.games)
        default:
            return state;

    } 
}

export default gameReducer;
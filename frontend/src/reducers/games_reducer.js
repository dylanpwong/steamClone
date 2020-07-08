import { RECEIVE_GAME } from '../actions/game_actions'

const gameReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_GAME:
            return {[action.game.title]: action.game};
            break;
        default:
            return state;

    } 
}

export default gameReducer;
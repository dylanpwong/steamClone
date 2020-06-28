import {RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT} from '../actions/session_actions'

const userReducer=(state={},action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({},state,{[action.user.id]: action.user});
            break;
        default:
            return {};
    }
}

export default userReducer;




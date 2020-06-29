import {RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT} from '../actions/session_actions'

const userReducer=(state={},action)=>{
    Object.freeze(state);
    // debugger;
    switch(action.type){
        
        case RECEIVE_CURRENT_USER:
            // return 
            return Object.assign({},state,{[action.currentUser.id]: action.currentUser});
            break;
        default:
            return {};
    }
}

export default userReducer;




import {RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT} from '../actions/session_actions'

const userReducer=(state=null,action)=>{
    Object.freeze(state);
    // debugger;
    switch(action.type){
        
        case RECEIVE_CURRENT_USER:
            debugger;
            return Object.assign({},state,{[action.currentUser.id]: action.currentUser});
            break;
        default:
            return null;
    }
}

export default userReducer;




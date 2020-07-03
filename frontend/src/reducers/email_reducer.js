import { RECEIVE_EMAIL, RECEIVE_CURRENT_USER } from "../actions/session_actions"



const EmailReducer = (state={},action)=>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_EMAIL:
            return action.email

        case RECEIVE_CURRENT_USER:{
            return null;
        }
        default:
            return null;
        break;
    }

    
}

export default EmailReducer
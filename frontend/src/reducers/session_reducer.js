import { combineReducers } from "redux";
// import errorsReducer from "./session_errors_reducer";
import userReducer from "./user_reducer";
import {RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT} from '../actions/session_actions'
import { UPDATE_USER } from "../actions/game_actions";


const preloadedState={
    isAuthenticated: false,
    user: null
}

// const sessionReducer=combineReducers({
//     // errors: errorsReducer,
//     isAuthenticated: false,
//     user: userReducer,
    
// })
const sessionReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger;
      return {
          ...state,
          isAuthenticated: !!action.currentUser,
          user: action.currentUser,
      }
     
      break;
    case RECEIVE_USER_LOGOUT:
        return{
        isAuthenticated: false,
        user: null
        }
      case UPDATE_USER:
        return {
          ...state,
          isAuthenticated: !!action.user,
          user: action.user,
        };
    default:
      return state;
  }
};
export default sessionReducer;
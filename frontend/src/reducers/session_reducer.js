import { combineReducers } from "redux";
// import errorsReducer from "./session_errors_reducer";
import userReducer from "./user_reducer";



const sessionReducer=combineReducers({
    // errors: errorsReducer,
    currentUser: userReducer
})
export default sessionReducer;
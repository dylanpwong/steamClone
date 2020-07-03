import { combineReducers } from "redux";
import EmailReducer from "./email_reducer";



const entitesReducer = combineReducers ({
    savedEmail: EmailReducer
});

export default entitesReducer;
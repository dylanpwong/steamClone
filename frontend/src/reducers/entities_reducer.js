import { combineReducers } from "redux";
import EmailReducer from "./email_reducer";
import GameReducer from "./games_reducer";



const entitiesReducer = combineReducers ({
    savedEmail: EmailReducer,
    games: GameReducer
    
});

export default entitiesReducer;
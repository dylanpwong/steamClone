import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';



export default combineReducers({
    // entities: 
    errors: errorsReducer,
    session: sessionReducer,
})

// export default rootReducer;

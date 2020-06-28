import {combineReducers} from 'redux';
import userReducer from './user_reducer';



export default combineReducers({
    // entities: {},
    // errors: {},
    session: userReducer
})

// export default rootReducer;

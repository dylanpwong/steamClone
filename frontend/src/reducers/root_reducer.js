import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitesReducer from './entities_reducer';



export default combineReducers({
    entities: entitesReducer,
    errors: errorsReducer,
    session: sessionReducer,
})
// entitesReducer
// export default rootReducer;

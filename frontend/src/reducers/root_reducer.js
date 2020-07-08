import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';



export default combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
})
// entitesReducer
// export default rootReducer;

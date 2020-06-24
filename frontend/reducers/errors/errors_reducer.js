import { combineReducers } from 'redux';
import sessionsErrorsReducer from './sessions_errors_reducer';
import userErrorsReducer from './user_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionsErrorsReducer,
    users: userErrorsReducer,
});

export default errorsReducer
import { combineReducers } from 'redux';
import sessionsErrorsReducer from '../session/sessions_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import trackErrorsReducer from './track_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionsErrorsReducer,
    users: userErrorsReducer,
    tracks: trackErrorsReducer,
});

export default errorsReducer
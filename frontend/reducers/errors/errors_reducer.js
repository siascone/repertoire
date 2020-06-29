import { combineReducers } from 'redux';
import tagErrorsReducer from './tag_errors_reducer';
import trackErrorsReducer from './track_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import sessionsErrorsReducer from '../session/sessions_errors_reducer';

const errorsReducer = combineReducers({
    tags: tagErrorsReducer,
    tracks: trackErrorsReducer,
    users: userErrorsReducer,
    session: sessionsErrorsReducer,
});

export default errorsReducer
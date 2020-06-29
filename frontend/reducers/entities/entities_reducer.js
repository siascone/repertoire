import { combineReducers } from 'redux';
import tagsReducer from './tags_reducer';
import tracksReducer from './tracks_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    tags: tagsReducer,
    tracks: tracksReducer,
    users: usersReducer,
});

export default entitiesReducer;
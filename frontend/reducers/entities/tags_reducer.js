import {
    RECEIVE_TAG,
    RECEIVE_TAGS
} from '../../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TAG:
            return Object.assign({}, state, {
                [action.tag.id]: action.tag
            });
        case RECEIVE_TAGS:
            return Object.assign({}, state, {
                [action.tag.id]: action.tag
            });
        default:
            return state;
    }
};

export default tagsReducer;
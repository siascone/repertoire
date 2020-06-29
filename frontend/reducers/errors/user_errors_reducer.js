const { RECEIVE_USER_ERRORS } = require("../../actions/user_actions");

const userErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return Object.assign({}, state, action.errors);   
        default:
            return state;
    }
};

export default userErrorsReducer;
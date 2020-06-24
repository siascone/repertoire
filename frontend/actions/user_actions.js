import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = ({user}) => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = payload => ({
    type: RECEIVE_USERS,
    payload
});

const receiveUserErrors = payload => ({
    type: RECEIVE_USER_ERRORS,
    payload
})

export const getUserById = userId => dispatch => (
    UserAPIUtil.getUserById(userId)
    .then(res => dispatch(receiveUser(res)))
    .fail(res => dispatch(receiveUserErrors(res)))
);

export const getUsersByQueryString = queryString => dispatch => (
    UserAPIUtil.getUsersByQueryString(queryString)
    .then(res => dispatch(receiveUsers(res)))
    .fail(res => dispatch(receiveUserErrors(res)))
);

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user)
    .then(res => dispatch(receiveUsers(res)))
    .fail(res => dispatch(receiveUserErrors(res)))
);


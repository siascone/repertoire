import { 
    getUserById, 
    getUsersByQueryString, 
    updateUser 
} from "../util/user_api_util";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload
});

const receiveUsers = payload => ({
    type: RECEIVE_USERS,
    payload
});

const receiveUserErrors = payload => ({
    type: RECEIVE_USER_ERRORS,
    payload
})

export const getUserbyId = userId => dispatch => (
    getUserById(usetId)
    .then(res => dispatch(receiveUser(res)))
    .catch(res => dispatch(receiveUserErrors(res)))
);

export const getUsersByQueryString = queryString => dispatch => (
    getUsersByQueryString(queryString)
    .then(res => dispatch(receiveUsers(res)))
    .catch(res => dispatch(receiveUserErrors(res)))
);

export const updateUser = user => dispatch => (
    updateUser(user)
    .then(res => dispatch(receiveUsers(res)))
    .catch(res => dispatch(receiveUserErrors(res)))
);


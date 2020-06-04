import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
    return {
        errors: Object.values(errors.session),
        formType: 'Login',
        link: <Link to='/signup'>Sign Up</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        loginDemoUser: () => dispatch(login({ username: "demo", password: 'password' })),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(msp, mdp)(SessionForm);
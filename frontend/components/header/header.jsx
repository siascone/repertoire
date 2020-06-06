import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

let Header = ({ currentUser, logout, user }) => {
    const links = () => (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    );

    const greeting = () => (
        <div>
            <div>Hello {user.username}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );

    return currentUser ? greeting() : links();
}

const msp = (state) => {
    return {
        currentUser: state.session.id,
        user: state.entities.users[state.session.id]
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

Header = connect(msp, mdp)(Header);

export default Header;
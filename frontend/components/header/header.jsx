import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

let Header = ({ currentUser, logout }) => {

    const loggedInHeader = () => (
        <div className="header">
            <Link to='/' className='header-link home'>Repertoire<i className='fa fa-home fa-lg'></i></Link>
            <div>Hello {currentUser.username}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );

    const loggedOutHeader = () => (
        <div className="header">
            <Link to='/' className='header-link home'>Repertoire<i className='fa fa-home fa-lg'></i></Link>
        </div>
    );

    return currentUser ? loggedInHeader() : loggedOutHeader();
}

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

Header = connect(msp, mdp)(Header);

export default Header;
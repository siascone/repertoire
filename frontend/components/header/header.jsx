import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

let Header = ({ currentUser, logout, match }) => {

    const home = () => (
        <Link 
            className='header-link home'
            onClick={e => match.path == '/' ? location.reload() : null} 
            to='/'
        > 
            <span className="header-logo-outer-circle">
                <span className="header-eighth-note">♪</span>
            </span> Repertoire
        </Link>
    );

    const menuButton = () => (
        <div className="header-menu-button">
            <div className="menu-button-line"></div>
            <div className="menu-button-line"></div>
            <div className="menu-button-line"></div>
        </div>
    );

    const loggedInNav = () => (
        <div className="header-nav">
            {home()}
            <button onClick={logout}>Logout</button>
            {menuButton()}
        </div>
    );

    const loggedOutNav = () => (
        <div className="header-nav">
            {home()}
            {menuButton()}
        </div>
    );

    return <div className="header">{currentUser ? loggedInNav() : loggedOutNav()}</div>
}

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

Header =  withRouter(connect(msp, mdp)(Header));

export default Header;
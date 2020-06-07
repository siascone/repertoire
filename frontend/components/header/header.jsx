import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

let Header = ({ currentUser, logout, match }) => {

    const home = (
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

    const loggedInNav = () => (
        <div className="nav">
            {home}
            <div>Hello {currentUser.username}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );

    const loggedOutNav = (
        <div className="nav">
            {home}
        </div>
    );

    return <div className="header">{currentUser ? loggedInNav() : loggedOutNav}</div>
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
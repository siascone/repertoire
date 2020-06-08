import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

let Header = ({ currentUser, logout, match, menu, toggleMenu }) => {

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
        <div className="header-menu-button" onClick={e => toggleMenu()}>
            {menu ? 
            <div className="header-menu-button">X</div>
            :
            <div className="header-menu-button">
                <div className="menu-button-line"></div>
                <div className="menu-button-line"></div>
                <div className="menu-button-line"></div>
            </div>}
        </div>
    );

    return (
        <div className="header">
            <div className="header-nav">
            {home()}
            {menuButton()}
        </div></div>
    );
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
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

let Header = ({ location, history, menu, toggleMenu }) => {
    const goHome = (e) => {
        location.pathname === "/" ? window.location.reload(false) : history.push('/')
        toggleMenu('off');
    };
    
    const home = () => (
        <div 
            className='header-link home'
            onClick={e => goHome(e)} 
        > 
            <span className="header-logo-outer-circle">
                <span className="header-eighth-note">♪</span>
            </span> Repertoire
        </div>
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
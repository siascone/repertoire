import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

let Header = ({ currentUser, logout }) => {

    const home = <Link to='/' className='header-link home'>♪ Repertoire<i className='fa fa-home fa-lg'></i></Link>

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

Header = connect(msp, mdp)(Header);

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout, user }) => {
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
    )

    return currentUser ? greeting() : links()
}

export default Header;
import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        const { logout, toggleMenu } = this.props;
        logout().then(res => toggleMenu())
    }

    render() {
        const { currentUser } = this.props
        return(
            <div className="main-menu">
                {currentUser ? 
                <div>
                    <div className="main-menu-item" onClick={this.logout}>Logout</div> 
                    <div className="main-menu-item">{currentUser.username}</div>
                </div>
                : null}
            </div>
        );
    }
}

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

Menu = connect(msp, mdp)(Menu);

export default Menu
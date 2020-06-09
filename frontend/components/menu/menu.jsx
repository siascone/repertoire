import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.logout = this.logout.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
    }

    logout(e) {
        const { logout, toggleMenu, history } = this.props;
        logout().then(res => {
            toggleMenu();
            history.push('/');
        })
    }

    goToProfile(e) {
        const { currentUser, history, toggleMenu } = this.props;
        history.push(`/users/${currentUser.id}`);
        toggleMenu();
    }

    render() {
        const { currentUser } = this.props
        return(
            <div className="main-menu">
                {currentUser ? 
                <div>
                    <div 
                        className="main-menu-item"
                        onClick={this.goToProfile}
                    >{currentUser.username} (view profile)</div>
                    <div className="main-menu-item">Premium</div> 
                    <div className="main-menu-item">About</div>
                    <div className="main-menu-item" onClick={this.logout}>Logout</div> 
                </div>
                : 
                <div>
                    <div className="main-menu-item">About</div>
                </div>
}
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

Menu = withRouter(connect(msp, mdp)(Menu));

export default Menu
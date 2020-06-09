import React from 'react';
import ProfilePhoto from './profile_photo';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { user, currentUser } = this.props;
        if (!user) return null;
        return(
            <div className="user-profile-container">
                <div className="user-profile-content">
                    <div className="user-profile-photo-container">
                        <ProfilePhoto url={user.profilePhoto} />
                    </div>
                    <div className="user-profile-username">{user.username}</div>
                </div>
            </div>
        );
    }
}

const msp = (state, ownProps) => {
    const userId = ownProps.match.params.userId;
    return({
        userId: userId,
        user: state.entities.users[userId],
    })
}

const mdp = dispatch => ({
    
})

Profile = withRouter(connect(msp, mdp)(Profile));

export default Profile;
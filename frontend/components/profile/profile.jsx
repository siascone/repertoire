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
            <ProfilePhoto url={user.profilePhoto} />
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
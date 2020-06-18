import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

let Profile = ({ currentUser, user }) => {
    const ownProfile = currentUser.username === user.username;
    return(
        <View>
            <Text>{user.username}</Text>
        </View>
    );
};

const msp = (state, ownProps) => {
    const userId = ownProps.match.params.userId
    return ({
        userId: userId,
        user: state.entities.users[userId],
    })
};

Profile = withRouter(connect(msp, null)(Profile));

export default Profile;
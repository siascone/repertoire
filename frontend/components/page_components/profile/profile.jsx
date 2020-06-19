import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Error404 from '../errors/error404';
import Avitar from './avitar';

const photo = require('../../../../app/assets/images/photo.png')

let Profile = ({ currentUser, user }) => {
    if (!user) return <Error404/>
    const ownProfile = currentUser.username === user.username;
    return(
        <View style={styles.container}>
            <Avitar url={photo} size={100}/>
            <Text style={styles.usernameText}>{user.username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    usernameText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    }
})

const msp = (state, ownProps) => {
    const userId = ownProps.match.params.userId
    return ({
        userId: userId,
        user: state.entities.users[userId],
    })
};

Profile = withRouter(connect(msp, null)(Profile));

export default Profile;
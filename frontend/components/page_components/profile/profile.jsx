import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Error404 from '../errors/error404';
import ProfileTabs from './profile_tabs';
import ProfilePhoto from './profile_photo';
import ProfileInfo from './profile_info';
import ProfileRepertoire from './profile_repertoire';
import ProfileFollows from './profile_follows';
import ProfileTracks from './profile_tracks';

const photo = require('../../../../app/assets/images/photo.png')

let Profile = ({ currentUser, user }) => {
    if (!user) return <Error404/>
    const ownProfile = currentUser.username === user.username;

    const [tab, setTab] = useState('Tracks');

    return(
        <View style={styles.container}>
            <ProfilePhoto user={user} ownProfile={ownProfile}/>
            <Text style={styles.text}>{user.username}</Text>
            <ProfileTabs tab={tab} setTab={setTab}/>
            {tab === "Info" ? <ProfileInfo user={user} /> : null}
            {tab === "Repertoire" ? <ProfileRepertoire user={user} /> : null}
            {tab === "Follows" ? <ProfileFollows user={user} /> : null}
            {tab === "Tracks" ? <ProfileTracks user={user} ownProfile={ownProfile}/> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    tabsContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '100%',
    },
    tab: {
        borderBottomColor: 'none',
        borderBottomWidth: 5,
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
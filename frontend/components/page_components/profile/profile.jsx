import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Error404 from '../errors/error404';
import ProfileTabs from './profile_tabs';
import ProfilePhoto from './profile_photo';
import ProfileInfo from './profile_info';
import ProfileRepertoire from './profile_repertoire';
import ProfileFollows from './profile_follows';
import ProfileTracks from './profile_tracks';

import { getUserById, updateUser } from '../../../actions/user_actions';
import RegularText from '../../custom/regular_text';
import RegularButton from '../../custom/regular_button';

let Profile = ({ currentUser, user, userId, getUserById, updateUser }) => {
    const [found, setFound] = useState(true)
    const [tab, setTab] = useState('Tracks');

    useEffect(() => { 
        getUserById(userId)
        .then(res => setFound(true))
        .fail(res => setFound(false));
    }, [userId]);

    if (!found) return <Error404 />;
    if (!user) return null;
    const ownProfile = currentUser.username === user.username;
    return(
        <View style={styles.container}>
            <ProfilePhoto user={user} ownProfile={ownProfile} updateUser={updateUser}/>
            <RegularText text={user.username} style={styles.usernameText} />
            <View style={styles.followContainer}>
                <RegularText text='210 Followers' style={styles.subText} />
                {ownProfile ? 
                <View></View>
                :
                <RegularButton text='Follow' style={styles.button} />}   
            </View>
            <ProfileTabs tab={tab} setTab={setTab}/>
            {tab === "Info" && <ProfileInfo user={user} ownProfile={ownProfile} updateUser={updateUser}/>}
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
        position: 'relative',
        padding: 20,
        width: '100%',
        maxWidth: 1200,
    },
    usernameText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    followContainer: {
        position: "absolute",
        width: 600,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: -1,
        top: 50,
        marginLeft: -40
    },
    subText: {
        color: 'white',
        fontSize: 12,
        padding: 10,
        textAlign: 'center',
    },
    button: {
        border: '1px solid white',
        borderRadius: 3,
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
});

const msp = (state, ownProps) => {
    const userId = ownProps.match.params.userId
    return ({
        userId: userId,
        user: state.entities.users[userId],
    })
};

const mdp = dispatch => ({
    getUserById: userId => dispatch(getUserById(userId)),
    updateUser: user => dispatch(updateUser(user)),
});

Profile = withRouter(connect(msp, mdp)(Profile));

export default Profile;
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

let Profile = ({ currentUser, user, userId, getUserById, updateUser }) => {
    const [found, setFound] = useState(true)
    const [tab, setTab] = useState('Info');

    useEffect(() => { 
        getUserById(userId).fail(res => setFound(false));
    }, [userId]);

    if (!found) return <Error404 />;
    if (!user) return null;
    const ownProfile = currentUser.username === user.username;
    return(
        <View style={styles.container}>
            <ProfilePhoto user={user} ownProfile={ownProfile} updateUser={updateUser}/>
            <Text style={styles.usernameText}>{user.username}</Text>
            <View style={styles.followContainer}>
                <Text style={styles.subText}>420<br/>Followers</Text>
                {ownProfile ? 
                <View></View>
                :
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.subText}>Follow</Text>
                </TouchableOpacity>}       
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
        padding: 20,
        position: 'relative',
    },
    usernameText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    followContainer: {
        position: "absolute",
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: -1,
        top: 50,
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
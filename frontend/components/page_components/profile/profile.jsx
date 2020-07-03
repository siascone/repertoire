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

    const profileHeader = () => (
        <View style={styles.header}>
            <View style={styles.photoContainer}>
                <ProfilePhoto user={user} ownProfile={ownProfile} updateUser={updateUser} />
            </View>
            <View style={styles.followContainer}>
                <RegularText
                    text={`${user.username} ${user.f_name || user.l_name ? `(${user.f_name ? user.f_name : ''}${user.l_name ? ' ' + user.l_name : ''})` : ''}`}
                    styles={styles.usernameText}
                />
                {user.headline ? <RegularText text={user.headline} styles={styles.headlineText} /> : null}
                <RegularText text='210 Followers' />
                {ownProfile ?
                    null
                    :
                    <RegularButton text='Follow' styles={styles.button} />}
            </View>
        </View>
    );

    if (!found) return <Error404 />;
    if (!user) return null;
    const ownProfile = currentUser.username === user.username;
    return(
        <View style={styles.container}>
            {profileHeader()}
            <ProfileTabs tab={tab} setTab={setTab}/>
            {tab === "Info" && <ProfileInfo user={user} ownProfile={ownProfile} updateUser={updateUser}/>}
            {tab === "Repertoire" ? <ProfileRepertoire user={user} /> : null}
            {tab === "Follows" ? <ProfileFollows user={user} /> : null}
            {tab === "Tracks" ? <ProfileTracks user={user} ownProfile={ownProfile}/> : null}
        </View>
    );
};

const styles = {
    container: {
        height: 'fit-content',
        minHeight: '100%',
        position: 'relative',
        padding: 20,
        width: '100%',
        minWidth: 300,
        maxWidth: 1200,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 20,
    },
    photoContainer: {
        marginLeft: 20,
        justifyContent: 'center',
    },
    usernameText: {
        regular_text: {
            marginLeft: -10,
            marginBottom: 10,
            fontWeight: 'bold',
        }
    },
    followContainer: {
        marginLeft: 20,
        marginRight: 20,
        maxWidth: '50%',
    },
    headlineText: {
        regular_text: {
            marginBottom: 10
        }
    },
    button: {
        regular_button_container: {
            marginTop: 10,
        }
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
};

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
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { logout } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import Avitar from '../../modular_components/avitar';
import RegularText from '../../custom/regular_text';

const photo = require('../../../../app/assets/images/photo.png')

let MainMenu = ({currentUser, logout, history, setMenu}) => {
    
    const leave = () => {
        logout().then(e => navigateTo('/'))
    };

    const navigateTo = path => {
        history.push(path);
        setMenu(false);
    };

    const viewProfileButton = () => (
        <TouchableOpacity onPress={e => navigateTo(`/users/${currentUser.id}`)}>
            <View style={styles.menuItem}>
                <Avitar url={currentUser.profilePhotoUrl || `assets/${photo}`} size={50} />
                <RegularText
                    text='Your profile'
                    styles={styles}
                />
            </View>
        </TouchableOpacity>
    );

    const logoutButton = () => (
        <TouchableOpacity onPress={e => leave()}>
            <RegularText
                text='Logout'
                styles={styles}
            />
        </TouchableOpacity> 
    );

    const loginSignupButton = () => (
        <TouchableOpacity onPress={e => navigateTo('/')}>
            <RegularText
                text='Login / Signup'
                styles={styles}
            />
        </TouchableOpacity> 
    );

    const aboutButton = () => (
        <TouchableOpacity onPress={e => navigateTo('/about')}>
            <RegularText
                text='About'
                styles={styles}
            />
        </TouchableOpacity> 
    );

    return (currentUser ?
        <View style={styles.container}>
            {viewProfileButton()}
            {logoutButton()}
        </View>
        : 
        <View style={styles.container}>
            {loginSignupButton()}
            {aboutButton()}
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    regular_text: {
        padding: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

MainMenu = connect(null, mdp)(MainMenu);

export default MainMenu;
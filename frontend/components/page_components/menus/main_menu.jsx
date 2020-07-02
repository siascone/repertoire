import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
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

    return (
        <View style={styles.view}>
            {currentUser ?
            <TouchableOpacity onPress={e => navigateTo(`/users/${currentUser.id}`)}>
                <View style={styles.menuItem}>
                    <Avitar url={currentUser.profilePhotoUrl || `assets/${photo}`} size={75} />
                    <RegularText
                        text={currentUser.username}
                        styles={styles}
                    />
                </View>
            </TouchableOpacity> : null}
            {currentUser ?
            <TouchableOpacity onPress={e => leave()}>
                <RegularText 
                    text='Logout'
                    styles={styles}
                />
            </TouchableOpacity> : null}
        </View>
    );
};

const styles = {
    view: {
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
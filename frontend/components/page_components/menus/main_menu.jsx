import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { logout } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import Avitar from '../../modular_components/avitar';

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
            <TouchableOpacity>
                {currentUser ?
                <View style={styles.menuItem}>
                    <Avitar url={currentUser.profilePhotoURL || `assets/${photo}`} size={30} />
                    <Text
                        style={styles.text}
                        onPress={e => navigateTo(`/users/${currentUser.id}`)}
                    >{currentUser.username}</Text>
                </View> : null}
            </TouchableOpacity>
            <TouchableOpacity >
                {currentUser ?
                <Text 
                    style={styles.text}
                    onPress={e => leave()}
                >Logout</Text> : null}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        padding: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
})

MainMenu = connect(null, mdp)(MainMenu);

export default MainMenu;
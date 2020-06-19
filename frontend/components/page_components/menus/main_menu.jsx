import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { logout } from '../../../actions/session_actions';
import { connect } from 'react-redux';

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
                <Text 
                    style={styles.text}
                    onPress={e => leave()}
                >Logout</Text> : null}
            </TouchableOpacity>
            <TouchableOpacity>
                {currentUser ?
                <Text 
                    style={styles.text}
                    onPress={e => navigateTo(`/users/${currentUser.id}`)}
                >{currentUser.username}</Text> : null}
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
    }
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
})

MainMenu = connect(null, mdp)(MainMenu);

export default MainMenu;
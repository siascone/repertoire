import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = ({history}) => {
    const path = history.location.pathname;
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text 
                    style={styles.text} 
                    onPress={e => history.push('/')} 
                >Repertoire</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuContainer}
                onPress={e => history.push(path === '/menu' ? '/' : '/menu')}
            >
                <View style={styles.menuLine}/>
                <View style={styles.menuLine}/>
                <View style={styles.menuLine}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    menuContainer: {
        padding: 10,
    },
    menuLine: {
        width: 30,
        padding: 1,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 2,
    }
});

export default Header;

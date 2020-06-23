import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SearchBar from './modular_components/search_bar';

const Header = ({history, setMenu, menu}) => {

    const navigateTo = path => {
        history.push(path);
        setMenu(false);
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text 
                    style={styles.text} 
                    onPress={e => navigateTo('/')} 
                >Repertoire</Text>
            </TouchableOpacity>
            <SearchBar history={history} />
            <TouchableOpacity
                style={styles.menuButtonContainer}
                onPress={e => setMenu(!menu)}
            >
                {menu ?
                <Text style={styles.menuText}>X</Text>
                :
                <View>
                    <View style={styles.menuLine}/>
                    <View style={styles.menuLine}/>
                    <View style={styles.menuLine}/>
                </View>}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    menuButtonContainer: {
        padding: 10,
        width: 50,
        alignItems: 'center'
    },
    menuLine: {
        width: 30,
        padding: 1,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 2,
    },
    menuText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        padding: 10,
        fontWeight: 300
    }
});

export default Header;

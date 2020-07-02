import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SearchBar from './modular_components/search_bar';
import useMediaQuery from '../util/media_query_util';
import RegularText from './custom/regular_text';

const Header = ({history, setMenu, menu}) => {

    const navigateTo = path => {
        if (history.location.pathname === path) return window.location.reload()
        history.push(path);
        setMenu(false);
    };
    const large = useMediaQuery("(min-width: 1000px)");

    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.leftNav}>
                    <TouchableOpacity>
                        <RegularText 
                            text={large ? 'Repertoire' : 'R'}
                            styles={styles.text} 
                            onPress={e => navigateTo('/')} 
                        />
                    </TouchableOpacity>
                    <SearchBar history={history} navigateTo={navigateTo} />
                </View>
                <TouchableOpacity
                    style={styles.menuButtonContainer}
                    onPress={e => setMenu(!menu)}
                >
                    {menu ?
                    <Text style={styles.buttonTextContainer}>X</Text>
                    :
                    <View style={styles.buttonTextContainer}>
                        <View style={styles.menuLine}/>
                        <View style={styles.menuLine}/>
                        <View style={styles.menuLine}/>
                    </View>}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        position: 'sticky',
        zIndex: 2,
        top: 0,
        width: '100%'
        // padding: 20,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        width: '100%',
        maxWidth: 1200,
    },
    leftNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '66%',
        marginRight: 10
    },
    text: {
        regular_text: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 40,
            marginRight: 20,
        }
    },
    menuButtonContainer: {
        padding: 10,
        width: 70,
        height: 70,
        alignItems: 'center'
    },
    menuLine: {
        width: '100%',
        padding: 2,
        backgroundColor: 'white',
        margin: 3,
        borderRadius: 2,
    },
    buttonTextContainer: {
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 400,
        color: 'white',
        textAlign: 'center'
    }
};

export default Header;

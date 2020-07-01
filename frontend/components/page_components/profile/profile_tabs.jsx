import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RegularText from '../../custom/regular_text';

let ProfileTabs = ({ tab, setTab }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={e => setTab('Info')} 
                style={tab === 'Info' ? styles.selectedTab : styles.tab}
            >
                <RegularText text='Info' />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={e => setTab('Repertoire')} 
                style={tab === 'Repertoire' ? styles.selectedTab : styles.tab}
            >
                <RegularText text='Repertoire' />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={e => setTab('Follows')} 
                style={tab === 'Follows' ? styles.selectedTab : styles.tab}
            >
                <RegularText text='Follows' />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={e => setTab('Tracks')} 
                style={tab === 'Tracks' ? styles.selectedTab : styles.tab}
            >
                <RegularText text='Tracks' />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop: 10,
    },
    tab: {
        // border: '5px solid none',
        borderTopWidth: 5,
        borderTopColor: 'none',
        borderBottomWidth: 5,
        borderBottomColor: 'none',
    },
    selectedTab: {
        borderBottomColor: 'skyblue',
        borderBottomWidth: 5,
        borderTopColor: 'skyblue',
        borderTopWidth: 5,
    }
})

export default ProfileTabs;
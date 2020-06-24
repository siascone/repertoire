import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

let ProfileTabs = ({ tab, setTab }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={e => setTab('Info')} 
                style={tab === 'Info' ? styles.selectedTab : styles.tab}
            >
                <Text style={styles.text}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={e => setTab('Repertoire')} 
                style={tab === 'Repertoire' ? styles.selectedTab : styles.tab}
            >
                <Text style={styles.text}>Repertoire</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={e => setTab('Follows')} 
                style={tab === 'Follows' ? styles.selectedTab : styles.tab}
            >
                <Text style={styles.text}>Follows</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={e => setTab('Tracks')} 
                style={tab === 'Tracks' ? styles.selectedTab : styles.tab}
            >
                <Text style={styles.text}>Tracks</Text>
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
    text: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    tab: {
        borderBottomColor: 'none',
        borderBottomWidth: 5,
    },
    selectedTab: {
        borderBottomColor: 'skyblue',
        borderBottomWidth: 5,
    }
})

export default ProfileTabs;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

let ProfileFollows = ({ user }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Follows</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        color: 'white'
    }
})

export default ProfileFollows;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

let ProfileInfo = ({ user }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Info</Text>
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

export default ProfileInfo;
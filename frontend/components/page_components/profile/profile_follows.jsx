import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegularText from '../../custom/regular_text';

let ProfileFollows = ({ user }) => {
    return (
        <View style={styles.container}>
            <RegularText text='Follows' style={styles.text} />
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
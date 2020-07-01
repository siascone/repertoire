import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegularText from '../../custom/regular_text';

let ProfileRepertoire = ({ user }) => {
    return (
        <View style={styles.container}>
            <RegularText text='Repertoire' />
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

export default ProfileRepertoire;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Avitar from '../../modular_components/avitar';

const photo = require('../../../../app/assets/images/photo.png')

let ProfilePhoto = ({ ownProfile, user }) => {
    return (
        <View style={styles.container}>
            <Avitar url={photo} size={100} />
            {ownProfile?
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>✎</Text>
                <input 
                    style={{opacity: 0, zIndex: 1, position: "absolute", cursor: 'pointer', height: '200%', width: '200%'}} 
                    type="file" name="" id=""
                />
            </TouchableOpacity> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    touch: {
        backgroundColor: 'white',
        borderRadius: '100%',
        border: '1px solid black',
        padding: 10,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        overflow: 'hidden',
    },
})

export default ProfilePhoto;
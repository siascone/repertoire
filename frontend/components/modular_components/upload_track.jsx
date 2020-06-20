import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

let UploadTrack = ({ user }) => {
    const [modal, setModal] = useState(false);
    return(modal ?
        <View><Text style={styles.text}>Modal</Text></View>
        :
        <TouchableOpacity style={styles.touch} onPress={e => setModal(true)}>
            <Text style={styles.add}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touch: {
        marginTop: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        border: '1px solid white',
        borderRadius: '100%',
        overflow: 'hidden',
    },
    text: {
        flex: 1,
        color: 'white',
    },
    add: {
        color: 'white',
        fontSize: 30,
    }
})

export default UploadTrack;
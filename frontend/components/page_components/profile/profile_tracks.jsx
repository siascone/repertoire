import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

let ProfileTracks = ({ user, ownProfile }) => {
    const [modal, setModal] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tracks</Text>
            {ownProfile ?
                modal?
                <View><Text style={styles.text}>Modal</Text></View>
                :
                <TouchableOpacity style={styles.touch} onPress={e => setModal(true)}>
                    <Text style={styles.add}>+</Text>
                </TouchableOpacity>
            : 
            null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
    },
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

export default ProfileTracks;
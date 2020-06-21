import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UploadTrack from '../../modular_components/upload_track';

let ProfileTracks = ({ user, ownProfile }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tracks</Text>
            {ownProfile ? <UploadTrack user={user} /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
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
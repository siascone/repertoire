import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UploadTrack from '../../modular_components/upload_track';

let Feed = ({ currentUser }) => {

    // useEffect(() => {
    //     getUserFeed(currentUser.id);
    // })

    return(
        <View style={styles.container}>
            <Text style={styles.text}>FEED</Text>
            <UploadTrack currentUser={currentUser} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    text:{
        color: 'white'
    }
})

export default Feed;
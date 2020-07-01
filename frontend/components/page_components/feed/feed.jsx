import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UploadTrack from '../../modular_components/upload_track';
import RegularText from '../../custom/regular_text';

let Feed = ({ currentUser }) => {

    // useEffect(() => {
    //     getUserFeed(currentUser.id);
    // })

    return(
        <View style={styles.container}>
            <UploadTrack currentUser={currentUser} />
            <RegularText text='FEED' />
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
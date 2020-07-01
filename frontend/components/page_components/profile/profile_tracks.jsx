import React, { useEffect } from 'react';
import { View, } from 'react-native';
import UploadTrack from '../../modular_components/upload_track';

import { getTracksByUserId } from '../../../actions/track_actions';
import { connect } from 'react-redux';
import RegularText from '../../custom/regular_text';

let ProfileTracks = ({ user, ownProfile, getTracksByUserId }) => {
    useEffect(() => {
        getTracksByUserId(user.id);
    });

    return(
        <View style={styles.container}>
            <RegularText text='Tracks' style={styles.text} />
            {ownProfile ? <UploadTrack user={user} /> : null}
        </View>
    );
};

const styles = {
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
};

const mdp = dispatch => ({
    getTracksByUserId: userId => dispatch(getTracksByUserId(userId))
});

ProfileTracks = connect(null, mdp)(ProfileTracks);

export default ProfileTracks;
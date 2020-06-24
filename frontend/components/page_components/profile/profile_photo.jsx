import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Avitar from '../../modular_components/avitar';

const photo = require('../../../../app/assets/images/photo.png')

let ProfilePhoto = ({ ownProfile, user, updateUser }) => {
    const [newPhoto, setNewPhoto] = useState({ url: null, file: null })

    const handleFile = e => {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = event => {
            const url = event.target.result;
            setNewPhoto({ url, file });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        };
        const formData = new FormData();
        formData.append('user[profile_photo]', file);
        formData.append('user[id]', user.id);
        updateUser(formData);
    };

    return (
        <View style={styles.container}>
            <Avitar url={user.profilePhotoURL || `/assets/${photo}`} size={100} />
            {ownProfile?
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.pencil}>✎</Text>
                <input 
                    style={{opacity: 0, zIndex: 1, position: "absolute", cursor: 'pointer', height: '300%', width: '300%'}} 
                    type="file" name="" id=""
                    onChange={e => handleFile(e)}
                />
            </TouchableOpacity> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    pencil: {
        color: 'black',
        fontSize: 20,
    },
    touch: {
        cursor: 'pointer',
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
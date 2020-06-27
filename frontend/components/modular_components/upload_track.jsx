import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import TagSuggest from './autosuggest/tag_suggest';
import RegularButton from '../buttons/regular_button';

let UploadTrack = ({ user }) => {
    const [modal, setModal] = useState(false);
    const [progress, setProgress] = useState('')
    const [url, setUrl] = useState('');
    const [addedTags, setTags] = useState({});

    const handleSave = e => {
        cancel();
    }

    const cancel = e => {
        setUrl('');
        setProgress('')
        setModal(false);
        setTags({});
    }

    const handleFile = e => {
        setUrl('')
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onprogress = ev => setProgress(`${(ev.loaded*100/ev.total).toFixed(2)}%`);
        fileReader.onloadend = (event) => {
            let result = event.target.result;
            setUrl(result);
        };
        if (file) {
            fileReader.readAsDataURL(file);
        };
    };

    return(modal ?
        <View style={styles.modalContainer}>
            <Text style={styles.text}>Upload Track</Text>
            <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 3, marginBottom: 10 }} >
                <input 
                    onChange={e => handleFile(e)}
                    type="file"
                />
                {progress ? <Text>Upload progress: {progress}</Text> : null}
            </View>
            <View>
                <video width="320" height="240" style={{backgroundColor: 'white', borderRadius: 3}} controls>
                    <source src={url} type="video/mp4"/>
                </video>
                <TextInput style={styles.input} placeholder='title'></TextInput>
                <TextInput style={styles.input} placeholder='time signature'></TextInput>
                <TagSuggest addedTags={addedTags} setTags={setTags} />
                <View style={styles.buttonsContainer}>
                    <RegularButton text='Cancel' onPress={cancel} />
                    {url ? <RegularButton text='Save' onPress={handleSave}/> : null}
                </View>
            </View>
        </View>
        :
        <TouchableOpacity style={styles.addContainer} onPress={e => setModal(true)}>
            <Text style={styles.add}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 10,
        padding: 10,
        border: '1px solid white',
        borderRadius: 3,
    },
    text: {
        padding: 10,
        color: 'white',
    },
    addContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        border: '1px solid white',
        borderRadius: '100%',
        overflow: 'hidden',
    },
    add: {
        color: 'white',
        fontSize: 30,
        flex: 1,
        paddingTop: 4,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        color: 'white',
        padding: 10,
        marginTop: 10,
        border: '1px solid white',
        borderRadius: 3,
    },
    cancel: {
        border: '1px solid white',
        borderRadius: 3,
        width: 'fit-content',
        marginTop: 10,
        zIndex: -1
    },
    buttonsContainer: {
        flexDirection: 'row',
        zIndex: -1,
        paddingTop: 10,
        width: 130,
        justifyContent: 'space-between',
    }
})

export default UploadTrack;
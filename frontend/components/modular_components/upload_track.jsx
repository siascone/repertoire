import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import TagSuggest from './autosuggest/tag_suggest';

let UploadTrack = ({ user }) => {
    const [modal, setModal] = useState(false);
    const [progress, setProgress] = useState('')
    const [url, setUrl] = useState('');
    const [addedTags, setTags] = useState({});

    const cancel = e => {
        setUrl('');
        setProgress('')
        setModal(false);
        setTags({});
    }

    const updateTags = (tag, add) => {
        if (add) {
            setTags({ [tag.id]: tag, ...addedTags });
        } else {
            const newTags = Object.assign({}, addedTags)
            delete newTags[tag.id];
            setTags(newTags);
        }
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
                {progress? <Text>Upload progress: {progress}</Text>:null}
            </View>
            {url ? 
            <View>
                <video width="320" height="240" style={{backgroundColor: 'white', borderRadius: 3}} controls>
                    <source src={url} type="video/mp4"/>
                </video>
                <TextInput style={styles.input} placeholder='title'></TextInput>
                <TextInput style={styles.input} placeholder='time signature'></TextInput>
                <TagSuggest addedTags={addedTags} updateTags={updateTags} />
            </View>
            : null}
            <TouchableOpacity style={styles.cancel} onPress={e => cancel()}>
                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
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
    addContainer: {
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
        padding: 10,
        color: 'white',
    },
    add: {
        color: 'white',
        fontSize: 30,
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
    }
})

export default UploadTrack;
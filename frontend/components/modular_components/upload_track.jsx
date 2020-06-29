import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import TagSuggest from './autosuggest/tag_suggest';
import RegularButton from '../custom/regular_button';
import TimeSignatureSelect from './time_signature_select';
import RegularTextInput from '../custom/regular_text_input';

let UploadTrack = ({ currentUser }) => {
    const [modal, setModal] = useState(false);
    const [progress, setProgress] = useState('')
    const [url, setUrl] = useState('');
    const [addedTags, setTags] = useState({});
    const [addedTimes, setTimes] = useState({});

    const handleSave = e => {
        cancel();
    }

    const cancel = e => {
        setUrl('');
        setProgress('')
        setModal(false);
        setTags({});
        setTimes({});
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
                <video width="600" height="350" style={{backgroundColor: 'white', borderRadius: 3}} controls>
                    <source src={url} type="video/mp4"/>
                </video>
                <RegularTextInput placeholder='title' styles={styles}/>
                <TagSuggest addedTags={addedTags} setTags={setTags} allowTagCreation={true}/>
                <TimeSignatureSelect addedTimes={addedTimes} setTimes={setTimes}/>
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

const styles = {
    modalContainer: {
        backgroundColor: '#111111',
        marginTop: 10,
        padding: 10,
        border: '1px solid white',
        borderRadius: 3,
        marginBottom: 20,
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
    regular_text_input: {
        marginTop: 10,
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        zIndex: -1,
        paddingTop: 10,
        width: 130,
        justifyContent: 'space-between',
    }
};

export default UploadTrack;
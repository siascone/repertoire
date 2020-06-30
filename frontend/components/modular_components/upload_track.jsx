import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import TagSuggest from './autosuggest/tag_suggest';
import RegularButton from '../custom/regular_button';
import TimeSignatureSelect from './time_signature_select';
import RegularTextInput from '../custom/regular_text_input';
import RegularText from '../custom/regular_text';

let UploadTrack = ({ currentUser }) => {
    const [modal, setModal] = useState(false);
    const [progress, setProgress] = useState('');
    const [url, setUrl] = useState('');
    const [fileState, setFileState] = useState(null)
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
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onprogress = ev => setProgress(`${(ev.loaded*100/ev.total).toFixed(2)}%`);
        fileReader.onloadend = (event) => {
            setUrl('')
            let result = event.target.result;
            setUrl(result);
        };
        if (file) {
            fileReader.readAsDataURL(file);
            setFileState(file);
        };
    };

    return(modal ?
        <View style={styles.modalContainer}>
            <Text style={styles.text}>Upload Track</Text>
            <TouchableOpacity style={{ position: 'relative', marginBottom: 10, overflow: 'hidden', cursor: 'pointer' }} >
                <RegularButton text={'Choose file'} styles={chooseFileStyles}/>
                <input 
                    onChange={e => handleFile(e)}
                    type="file"
                    style={{position: 'absolute', opacity: 0, width: '100%', height: '100%'}}
                />
                {fileState ? 
                <RegularText 
                    text={`${fileState.name}  |  Upload progress: ${progress}`} 
                    styles={chooseFileStyles}
                /> : null}
            </TouchableOpacity>
            {url ?
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
            </View> : null}
        </View>
        :
        <TouchableOpacity style={styles.addContainer} onPress={e => setModal(true)}>
            <Text style={styles.add}>+</Text>
        </TouchableOpacity>
    );
};

const styles = {
    modalContainer: {
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

const chooseFileStyles = {
    regular_button_container: {
        width: '100%',
    },
    regular_text: {
        marginTop: 10,
    }
}

export default UploadTrack;
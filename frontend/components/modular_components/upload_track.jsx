import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import TagSuggest from './autosuggest/tag_suggest';
import RegularButton from '../custom/regular_button';
import TimeSignatureSelect from './time_signature_select';
import RegularTextInput from '../custom/regular_text_input';
import RegularText from '../custom/regular_text';
import useMediaQuery from '../../util/media_query_util';

let UploadTrack = ({ currentUser }) => {
    const [modal, setModal] = useState(false);
    const [progress, setProgress] = useState('');
    const [url, setUrl] = useState('');
    const [fileState, setFileState] = useState(null);
    const [addedTags, setTags] = useState({});
    const [addedTimes, setTimes] = useState({});

    const handleSave = e => {
        cancel();
    };

    const cancel = e => {
        setUrl('');
        setProgress('')
        setModal(false);
        setTags({});
        setTimes({});
        setFileState(null);
    };

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

    const large = useMediaQuery("(min-width: 1000px)");

    return(modal ?
        <View style={{ flexDirection: large ? 'row' : 'column', ...styles.modalContainer}}>
            <View style={{ width: large ? '49%' : '100%', margin: 5 }}> 
                <TouchableOpacity style={styles.chooseFileContainer} >
                    <RegularButton text={'Choose file'} styles={chooseFileStyles} />
                    <input 
                        onChange={e => handleFile(e)}
                        type="file"
                        style={styles.fileInput}
                    />
                </TouchableOpacity>
                {fileState ? 
                <RegularText 
                    text={`${fileState.name}  |  Upload progress: ${progress}`} 
                    styles={uploadStatusStyles}
                /> : null}
                {url ?
                <video style={styles.video} controls>
                    <source src={url} type="video/mp4"/>
                </video> : null}
            </View>
            <View style={{ width: large ? '49%' : '100%', margin: 5 }}>
                {url ? 
                <View style={styles.otherInputs}>
                    <RegularTextInput placeholder='title' styles={styles}/>
                    <TagSuggest addedTags={addedTags} setTags={setTags} allowTagCreation={true}/>
                    <TimeSignatureSelect addedTimes={addedTimes} setTimes={setTimes}/>
                </View> : null}
                <View style={styles.buttonsContainer}>
                    <RegularButton text='Cancel' styles={styles} onPress={cancel} />
                    {url ? <RegularButton text='Save' onPress={handleSave}/> : null}
                </View>
            </View>
        </View>
        :
        <RegularButton text='+' styles={styles.addContainer} onPress={e => setModal(true)} />
    );
};

const styles = {
    modalContainer: {
        // flexWrap: 'wrap',
        marginTop: 10,
        padding: 20,
        border: '1px solid white',
        borderRadius: 3,
        marginBottom: 20,
        minWidth: 500,
        maxWidth: 1200,
    },
    chooseFileContainer: { 
        position: 'relative',
        marginBottom: 10,
        overflow: 'hidden' 
    },
    fileInput: { 
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        width: '200%',
        height: '200%',
        left: -100
    },
    otherInputs: {
        marginBottom: 30,
    },
    text: {
        padding: 10,
        color: 'white',
    },
    addContainer: {
        regular_button_container:{
            justifyContent: 'center',
            marginTop: 10,
            height: 100,
            width: 100,
            borderRadius: '100%',
            overflow: 'hidden',
        },
        regular_button_text: {
            fontSize: 100,
            marginTop: -20
        }
    },
    regular_text_input: {
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        zIndex: -1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    regular_button_container: {
        marginRight: 10,
    },
    video: {
        width: '100%',
        height: '70%',
    }
};

const chooseFileStyles = {
    regular_button_container: {
        width: '100%',
    },
}

const uploadStatusStyles = {
    regular_text: {
        marginTop: 10,
    }
}

export default UploadTrack;
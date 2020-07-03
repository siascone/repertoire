import React, { useState } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';

import TagSuggest from './autosuggest/tag_suggest';
import RegularButton from '../custom/regular_button';
import TimeSignatureSelect from './time_signature_select';
import RegularTextInput from '../custom/regular_text_input';
import RegularText from '../custom/regular_text';
import useMediaQuery from '../../util/media_query_util';

import { createTrack } from '../../actions/track_actions';

let UploadTrack = ({ currentUser, createTrack }) => {
    const [modal, setModal] = useState(false);
    const [fileState, setFileState] = useState(null);
    const [progress, setProgress] = useState('');
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [addedTags, setTags] = useState({});
    const [addedTimes, setTimes] = useState({});

    const cancel = e => {
        setModal(false);
        setFileState(null);
        setProgress('');
        setUrl('');
        setTitle('');
        setTags({});
        setTimes({});
    };

    const handleSave = e => {
        const formData = new FormData();
        const track = {
            file: fileState,
            title: title,
            tags_ids: Object.keys(addedTags),
            time_signatures: Object.keys(addedTimes)
        };
        Object.keys(track).forEach(key => {
            formData.append(`track[${key}]`, track[key])
        });
        createTrack(formData);
    };

    const handleFile = e => {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onprogress = ev => setProgress(`${(ev.loaded*100/ev.total).toFixed(2)}%`);
        fileReader.onloadend = (event) => {
            setUrl('');
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
                        style={styles.fileInput}
                        type="file"
                        onChange={e => handleFile(e)}
                        accept="audio/*, video/*"
                    />
                </TouchableOpacity>
                {fileState ? 
                <RegularText 
                    text={fileState.name} 
                    styles={uploadStatusStyles}
                /> : null}
                {fileState ? 
                <RegularText 
                    text={`Upload progress: ${progress}`} 
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
                    <RegularTextInput placeholder='title' styles={styles} onChange={e => setTitle(e.currentTarget.value)}/>
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
        marginTop: 10,
        padding: 20,
        border: '1px solid white',
        borderRadius: 3,
        marginBottom: 20,
        minWidth: 300,
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
            height: 60,
            width: 60,
            borderRadius: '100%',
            overflow: 'hidden',
        },
        regular_button_text: {
            fontSize: 60,
            marginTop: -10
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
        marginTop: 5
    }
};

const chooseFileStyles = {
    regular_button_container: {
        width: '100%',
    },
};

const uploadStatusStyles = {
    regular_text: {
        marginTop: 5,
        marginBottom: 5
    }
};

const mdp = dispatch => ({
    createTrack: track => dispatch(createTrack(track)),
});

UploadTrack = connect(null, mdp)(UploadTrack);
export default UploadTrack;
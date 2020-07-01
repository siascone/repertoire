import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import RegularTextInput from '../../custom/regular_text_input';
import RegularText from '../../custom/regular_text';
import RegularButton from '../../custom/regular_button';



let ProfileInfo = ({ user, ownProfile, updateUser }) => {
    const [edit, setEdit] = useState(false);
    const [inputs, setInputs] = useState({
        id: user.id,
        f_name: user.f_name,
        l_name: user.l_name,
        bio: user.bio,
        headline: user.headline,
    });

    const handleSave = e => {
        const formData = new FormData();
        Object.keys(inputs).forEach(key => {
            formData.append(`user[${key}]`, inputs[key])
        });
        updateUser(formData);
    };

    const handleChange = field => {
        return e => {
            const newState = Object.assign({}, inputs);
            newState[field] = e.currentTarget.value;
            setInputs(newState);
        };
    };

    const dispayInfo = () => (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RegularText text='Info' />
                {ownProfile &&
                <TouchableOpacity style={styles.touch} onPress={e => setEdit(true)}>
                    <Text style={styles.pencil}>✎</Text>
                </TouchableOpacity>}
            </View>
            <RegularText text={`Username: ${user.username}`} styles={styles.text} />
            { user.f_name ? <RegularText text={`First Name: ${user.f_name}`} styles={styles.text} /> : null}
            { user.l_name ? <RegularText text={`Last Name: ${user.l_name}`} styles={styles.text} /> : null}
            { user.bio ? <RegularText text={`Bio: ${user.bio}`} styles={styles.text} /> : null}
            { user.headline ? <RegularText text={`Headline: ${user.headline}`} styles={styles.text} /> : null}
        </View>
    );

    const editInfo = () => (
        <View style={styles.container}>
            <RegularText text={`Username: ${user.username}`} styles={styles.text} />
            <RegularTextInput styles={styles} placeholder='first name' onChange={handleChange('f_name')} />
            <RegularTextInput styles={styles} placeholder='last name' onChange={handleChange('l_name')} />
            <RegularTextInput styles={styles} placeholder='bio' onChange={handleChange('bio')} />
            <RegularTextInput styles={styles} placeholder='headline' onChange={handleChange('headline')} />
            <View style={styles.buttonContainer}>
                <RegularButton text='Save' styles={styles.button} onPress={e => handleSave(e)} />
                <RegularButton text='Cancel' styles={styles.button} onPress={e => setEdit(false)} />
            </View>
        </View>
    );

    return edit ? editInfo() : dispayInfo();
};

const styles = {
    container: {
        padding: 10
    },
    pencil: {
        color: 'black',
        fontSize: 40,
    },
    touch: {
        cursor: 'pointer',
        backgroundColor: 'white',
        borderRadius: '100%',
        border: '1px solid black',
        padding: 10,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    text: {
        regular_text: {
            marginTop: 10,
        }
    },
    buttonText: {
        color: 'white',
    },
    regular_text_input: {
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        regular_button_container: {
            marginRight: 10
        }
    },
};

export default ProfileInfo;
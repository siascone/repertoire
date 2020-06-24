import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';



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
            {ownProfile &&
            <TouchableOpacity style={styles.touch} onPress={e => setEdit(true)}>
                <Text style={styles.pencil}>✎</Text>
            </TouchableOpacity>}
            <Text style={styles.text}>Info</Text>
            <Text style={styles.text}>Username: {user.username}</Text>
            <Text style={styles.text}>First Name: {user.f_name}</Text>
            <Text style={styles.text}>Last Name: {user.l_name}</Text>
            <Text style={styles.text}>Bio: {user.bio}</Text>
            <Text style={styles.text}>Headline: {user.headline}</Text>
        </View>
    );

    const editInfo = () => (
        <View style={styles.container}>
            <Text style={styles.text}>Username: {user.username}</Text>
            <TextInput style={styles.input} placeholder='f_name' onChange={handleChange('f_name')}></TextInput>
            <TextInput style={styles.input} placeholder='l_name' onChange={handleChange('l_name')}></TextInput>
            <TextInput style={styles.input} placeholder='bio' onChange={handleChange('bio')}></TextInput>
            <TextInput style={styles.input} placeholder='headline' onChange={handleChange('headline')}></TextInput>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={e => handleSave(e)} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={e => setEdit(false)} style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return edit ? editInfo() : dispayInfo();
};

const styles = StyleSheet.create({
    container: {
        padding: 10
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
    },
    text: {
        color: 'white',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
    },
    input: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        paddingRight: 10,
        border: '1px solid white',
        borderRadius: 3,
        marginTop: 10,
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        paddingRight: 10,
        border: '1px solid white',
        borderRadius: 3,
        width: 'fit-content',
        marginRight: 10
    },
})

export default ProfileInfo;
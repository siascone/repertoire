import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

let SessionForm = ({ type, login, signup, errors, clearSessionErrors }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (button) => {
        const user = {username, password};
        clearSessionErrors();
        if (type === 'Login') {
            login(button ? demoUser : user)
        } else {
            signup(user)
        }
    }

    return (
        <View style={styles.container}>
            <View>
            {errors.map(error => 
                <Text style={styles.text}>{error}</Text>
            )}
            </View>
            <TextInput
                placeholder='email'
                style={styles.input}
                onChange={e => setUsername(e.currentTarget.value)}
                onSubmitEditing={e => handleSubmit()}
            />
            <TextInput
                placeholder='password'
                style={styles.input}
                secureTextEntry='true'
                onChange={e => setPassword(e.currentTarget.value)}
                onSubmitEditing={e => handleSubmit()}
            />
            <br/>
            <TouchableOpacity
                style={styles.button}
                onPress={e => handleSubmit()}
            ><Text style={styles.text}>{type}</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
        width: 'fit-content',
        border: '1px solid white',
        borderRadius: 3
    },
    input: {
        height: 30,
        width: 300,
        backgroundColor: 'white',
        borderColor: 'black',
        padding: 10,
        borderRadius: 3,
        margin: 5,
    },
    text: {
        color: 'white'
    },
    button: {
        border: '1px solid white',
        borderRadius: 3,
        padding: 10,
    }
});

export default SessionForm;
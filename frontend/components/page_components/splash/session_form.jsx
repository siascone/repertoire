import React from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { login, signup, clearSessionErrors } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import { useState } from 'react';

let SessionForm = ({ type, login, signup, errors, clearSessionErrors }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (button) => {
        const user = {username, password};
        clearSessionErrors();
        if (type === 'login') {
            login(button ? demoUser : user)
        } else {
            signup(user)
        }
    }

    return (
        <View style={styles.container}>
            <View>
            {errors.map(error => 
                <Text>{error}</Text>
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
            <Button
                title={type}
                onPress={e => handleSubmit()}
                style={styles.button}
                color='black'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        marginTop: 100,
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
    button: {
        margin: 100,
    }
});

export default SessionForm;
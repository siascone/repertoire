import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const SessionForm = ({ type }) => {
    const handleSubmit = (e) => {
        console.log("you submit")
    }
    return (
        <View style={styles.view}>
            <TextInput
                placeholder='email'
                style={styles.input}
                onSubmitEditing={e => handleSubmit(e)}
            />
            <TextInput
                placeholder='password'
                style={styles.input}
                onSubmitEditing={e => handleSubmit(e)}
            />
            <Button
                title='Login'
                onPress={e => handleSubmit(e)}
                style={styles.button}
                color='black'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
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
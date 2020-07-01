import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import RegularTextInput from '../../custom/regular_text_input';
import RegularButton from '../../custom/regular_button';
import RegularText from '../../custom/regular_text';

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
                <RegularText text={error} />
            )}
            </View>
            <RegularTextInput
                placeholder='email'
                styles={styles}
                onChange={e => setUsername(e.currentTarget.value)}
                onSubmitEditing={e => handleSubmit()}
            />
            <RegularTextInput
                placeholder='password'
                styles={styles}
                secureTextEntry='true'
                onChange={e => setPassword(e.currentTarget.value)}
                onSubmitEditing={e => handleSubmit()}
            />
            <br/>
            <RegularButton
                text={type}
                style={styles}
                onPress={e => handleSubmit()}
            />
        </View>
    );
}

const styles = {
    container: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
        width: 'fit-content',
        border: '1px solid white',
        borderRadius: 3
    },
    regular_text_input: {
        width: 600,
        margin: 5,
    },

};

export default SessionForm;
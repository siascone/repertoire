import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import SessionForm from './session_form';
import { useState } from 'react';
import { clearSessionErrors, login, signup } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import RegularButton from '../../custom/regular_button';

let Splash = ({errors, clearSessionErrors, login, signup}) => {
    const [type, setType] = useState('Login')

    const demoUser = {
        username: 'demo',
        password: 'password'
    }
    
    const otherType = type === 'Login' ? 'Signup' : 'Login'

    const switchForm = () => {
        clearSessionErrors();
        setType(otherType)
    }

    return(
        <View style={styles.splashContainer}>
            <SessionForm 
                type={type} 
                errors={errors}
                login={login}
                signup={signup}
                clearSessionErrors={clearSessionErrors}
            />
            <View style={styles.buttonsContainer}>
                <RegularButton 
                    text={otherType}
                    styles={styles}
                    onPress={e => switchForm()} 
                />
                <RegularButton
                    text='Demo' 
                    styles={styles}
                    onPress={e => login(demoUser)}
                />
            </View>
        </View>
    );
}

const styles = {
    splashContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsContainer: {
        marginTop: 20,
        width: 200,
        justifyContent: "space-between",
        height: 100,
    },
    regular_button_container: {
        width: '100%',
        marginBottom: 10,
    },
    text: {
        color: 'white',
    }
};

const msp = state => ({
    errors: state.errors.session,
});

const mdp = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

Splash = connect(msp, mdp)(Splash);

export default Splash;
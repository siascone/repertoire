import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import SessionForm from './session_form';
import { useState } from 'react';
import { clearSessionErrors, login, signup } from '../../../actions/session_actions';
import { connect } from 'react-redux';

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
                <TouchableOpacity 
                    style={styles.button}
                    onPress={e => switchForm()} 
                ><Text style={styles.text}>{otherType}</Text></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    title='Demo'
                    onPress={e => login(demoUser)}
                ><Text style={styles.text}>Demo</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsContainer: {
        marginTop: 20,
        width: 100,
        justifyContent: "space-between",
        height: 100,
    },
    button: {
        border: '1px solid white',
        borderRadius: 3,
        padding: 10,
        textAlign: 'center',
    },
    text: {
        color: 'white',
    }
});

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
import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import SessionForm from './session_form';
import { useState } from 'react';
import { clearSessionErrors, login, signup } from '../../../actions/session_actions';
import { connect } from 'react-redux';

let Splash = ({errors, clearSessionErrors, login, signup}) => {
    const [type, setType] = useState('login')

    const demoUser = {
        username: 'demo',
        password: 'password'
    }
    
    const otherType = type === 'login' ? 'signup' : 'login'

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
                <Button 
                    title={otherType}
                    onPress={e => switchForm()} 
                    color='grey' 
                />
                <Button 
                    color='grey' 
                    title='Demo'
                    onPress={e => login(demoUser)}
                />
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
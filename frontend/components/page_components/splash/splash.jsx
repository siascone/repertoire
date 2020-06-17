import React from 'react';
import { StyleSheet, View} from 'react-native';
import SessionForm from './session_form';

const Splash = () => {
    return(
        <View style={styles.view}>
            <SessionForm />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        // alignItems: 'center',
    }
});

export default Splash;
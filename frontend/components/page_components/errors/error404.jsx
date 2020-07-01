import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RegularText from '../../custom/regular_text';

const Error404 = () => {
    return (
        <View style={styles.container}>
            <RegularText text='404 ERROR' styles={styles} />
            <br/>
            <RegularText text="THIS PAGE DOESN'T EXIST" styles={styles} />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
    },
    regular_text: {
        fontWeight: 'bold',
    }
};

export default Error404;
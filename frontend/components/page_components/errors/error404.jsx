import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Error404 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>404 ERROR<br/>THIS PAGE DOESN'T EXIST</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default Error404;
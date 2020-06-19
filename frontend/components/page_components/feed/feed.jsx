import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

let Feed = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>FEED</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    text:{
        color: 'white'
    }
})

export default Feed;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

let SearchResults = ({ history, input }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Showing results for '{input}'
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    text: {
        color: 'white',
    }
});

export default SearchResults;
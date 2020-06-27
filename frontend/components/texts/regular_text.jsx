import React from 'react';
import { Text, StyleSheet } from 'react-native';

let RegularText = ({ text, style }) => (
    <Text style={{ color: 'white', ...style}} >
        {text}
    </Text>
);

const styles = StyleSheet.create({
    text: {
        color: 'white',
    }
});

export default RegularText;
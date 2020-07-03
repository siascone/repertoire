import React from 'react';
import { Text } from 'react-native';

let RegularText = ({ 
    text = {}, 
    styles = {}, // regular_text
    onPress = e => null,
}) => (
    <Text onPress={onPress} style={{ color: 'white', fontSize: 20, overflowWrap: 'anywhere', ...styles.regular_text, ...styles.regular_button_text}} >
        {text}
    </Text>
);

export default RegularText;
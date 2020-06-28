import React from 'react';
import { Text } from 'react-native';

let RegularText = ({ 
    text = {}, 
    styles = {} // regular_text
}) => (
    <Text style={{ color: 'white', ...styles.regular_text}} >
        {text}
    </Text>
);

export default RegularText;
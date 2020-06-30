import React from 'react';
import { TouchableOpacity } from 'react-native';
import RegularText from './regular_text'

let RegularButton = ({ 
    text = '', 
    onPress = e => null, 
    styles = {} // regular_button_container, regular_button_text
}) => (
    <TouchableOpacity 
        onPress={onPress}
        style={{
            backgroundColor: 'black',
            border: '1px solid white',
            borderRadius: 3,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 7,
            paddingBottom: 7,
            width: 'fit-content',
            textAlign: 'center',
            zIndex: -2,
            ...styles.regular_button_container
        }} 
    >
        <RegularText text={text} />
    </TouchableOpacity>
);

export default RegularButton;
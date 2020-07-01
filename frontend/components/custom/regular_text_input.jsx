import React from 'react';
import { TextInput } from 'react-native';

let RegularTextInput = ({ 
    value,
    reff,
    placeholder = '', 
    onChange = e => null, 
    onSubmitEditing = e => null,
    onPress = e => null,
    styles = {} // regular_text_input
}) => (
    <TextInput
        placeholder={placeholder} 
        value={value}
        ref={reff}
        onSubmitEditing={onSubmitEditing} 
        onChange={onChange}
        onPress={onPress}
        style={{
            backgroundColor: 'black',
            border: '1px solid white',
            borderRadius: 3,
            color: 'white',
            padding: 10,
            fontSize: 30,
            ...styles.regular_text_input
        }}
    />
);

export default RegularTextInput;
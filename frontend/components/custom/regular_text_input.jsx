import React from 'react';
import { TextInput } from 'react-native';

let RegularTextInput = ({ 
    value,
    placeholder = '', 
    onChange = e => null, 
    onSubmitEditing = e => null,
    styles = {} // regular_text_input
}) => (
    <TextInput
        placeholder={placeholder} 
        value={value}
        onSubmitEditing={onSubmitEditing} 
        onChange={onChange}
        style={{
            border: '1px solid white',
            borderRadius: 3,
            color: 'white',
            padding: 10,
            ...styles.regular_text_input
        }}
    />
);

export default RegularTextInput;
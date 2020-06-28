import React from 'react';
import { TextInput } from 'react-native';

let RegularTextInput = ({ 
    value,
    reff,
    placeholder = '', 
    onChange = e => null, 
    onSubmitEditing = e => null,
    styles = {} // regular_text_input
}) => (
    <TextInput
        placeholder={placeholder} 
        value={value}
        ref={reff}
        onSubmitEditing={onSubmitEditing} 
        onChange={onChange}
        style={{
            backgroundColor: 'black',
            border: '1px solid white',
            borderRadius: 3,
            color: 'white',
            padding: 10,
            ...styles.regular_text_input
        }}
    />
);

export default RegularTextInput;
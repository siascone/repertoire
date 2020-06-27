import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import RegularText from '../texts/regular_text'

let RegularButton = ({ text, onPress, style = {} }) => {
return(
    <TouchableOpacity 
        style={styles.container} 
        onPress={onPress}
    >
        <RegularText text={text} />
    </TouchableOpacity>
);
    }

const styles = StyleSheet.create({
    container: {
        border: '1px solid white',
        borderRadius: 3,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        width: 'fit-content',
        zIndex: -2,
    }
});

export default RegularButton;
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

let SearchBar = ({ history }) => {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.currentTarget.value);
    };

    const handleSearch = e => {
        const params = new URLSearchParams();
        params.set('input', input);
        const queryString = params.toString();
        history.push(`/search/${queryString}`);
    }

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='search' 
                onChange={e => handleChange(e)}
                onSubmitEditing={e => handleSearch(e)} 
            ></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text} onPress={e => handleSearch(e)}>Go</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '50%'
    },
    input: {
        border: '1px solid white',
        paddingLeft: 10,
        paddingRight: 45,
        paddingTop: 7,
        paddingBottom: 7,
        color: 'white',
        borderRadius: 3,
        width: '100%',
    },
    button: {
        position: 'absolute',
        right: 0,
        padding: 8,
        width: 'fit-content',
        height: '100%',
        borderLeftWidth: 1,
        borderLeftColor: 'white',
        zIndex: 1,
    },
    text: {
        color: 'white',
    }
})

export default SearchBar;
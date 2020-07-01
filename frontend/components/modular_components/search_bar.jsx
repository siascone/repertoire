import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import RegularTextInput from '../custom/regular_text_input';
import RegularButton from '../custom/regular_button';

let SearchBar = ({ history, navigateTo }) => {
    let search = (new URLSearchParams(history.location.search)).get('input');
    const [input, setInput] = useState(search || '')

    useEffect(() => { 
        search = (new URLSearchParams(history.location.search)).get('input')
        setInput(search || '')
    }, [history.location]);

    const handleChange = e => {
        setInput(e.currentTarget.value);
    };

    const handleSearch = e => {
        const params = new URLSearchParams();
        params.set('input', input);
        const queryString = params.toString();
        navigateTo(`/search/?${queryString}`);
        // history.push(`/search/?${queryString}`);
    }

    return(
        <View style={styles.container}>
            <RegularTextInput
                value={input}
                styles={styles}
                placeholder='search' 
                onChange={e => handleChange(e)}
                onSubmitEditing={e => handleSearch(e)} 
            />
            <RegularButton 
                text='Go'
                styles={styles}
                onPress={e => handleSearch(e)}
            />
        </View>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '50vw'
    },
    regular_text_input: {
        paddingRight: 45,
        width: '100%',
    },
    regular_button_container: {
        position: 'absolute',
        justifyContent: 'center',
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
};

export default SearchBar;
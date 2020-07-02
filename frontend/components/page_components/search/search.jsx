import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Filters from './filters';
import SearchResults from './search_results';

let Search = ({ history }) => {
    let search = (new URLSearchParams(history.location.search)).get('input');
    const [input, setInput] = useState(search || '');

    useEffect(() => {
        search = (new URLSearchParams(history.location.search)).get('input')
        setInput(search || '')
    }, [history.location]);

    return(
        <View style={styles.container}>
            <Filters history={history} />
            <SearchResults input={input} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },

});

export default Search;
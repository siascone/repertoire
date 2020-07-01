import React from 'react';
import { View } from 'react-native';
import RegularText from '../../custom/regular_text';

let SearchResults = ({ history, input }) => {
    return(
        <View style={styles.container}>
            <RegularText text={`Showing results for '${input}'`} />
        </View>
    );
};

const styles = {
    container: {
        padding: 20,
    },
    text: {
        color: 'white',
    }
};

export default SearchResults;
import React from 'react';
import { View } from 'react-native';
import RegularText from '../../custom/regular_text';

let SearchResults = ({ history, input }) => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <RegularText text={`Showing results for '${input}'`} />

            </View>
        </View>
    );
};

const styles = {
    container: {
        alignItems: 'center'
    },
    content: {
        width: '100%',
        maxWidth: 1200,
        padding: 20,
    },
    text: {
        color: 'white',
    }
};

export default SearchResults;
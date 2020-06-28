import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RegularButton from '../../custom/regular_button';
import TagSuggest from '../../modular_components/autosuggest/tag_suggest';
import TimeSignatureSelect from '../../modular_components/time_signature_select';

let Filters = ({ history }) => {
    const [show, setShow] = useState(false);
    const [addedTags, setTags] = useState({});
    const [addedTimes, setTimes] = useState({});

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.buttonsContainer}>
                    <RegularButton 
                        text={show ? 'Close' : 'Filters'} 
                        onPress={e => setShow(!show)} 
                    />
                    {show &&
                    <RegularButton 
                        text='Apply' 
                    />}
                    {show &&
                    <RegularButton 
                        text='Clear All' 
                    />}

                </View>
                {show &&
                <View style={styles.filtersContainer}>
                    <Text style={styles.text}>Filters:</Text> 
                    <TagSuggest setTags={setTags} addedTags={addedTags} />
                    <TimeSignatureSelect setTimes={setTimes} addedTimes={addedTimes} />
                </View>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        zIndex: 2,
        backgroundColor: '#222222'
    },
    content: {
        maxWidth: 500,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: 300,
    },
    filtersContainer: {
        marginTop: 10,
    },
    text: {
        color: 'white'
    },
});

export default Filters;
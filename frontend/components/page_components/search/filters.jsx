import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RegularButton from '../../custom/regular_button';
import TagSuggest from '../../modular_components/autosuggest/tag_suggest';
import TimeSignatureSelect from '../../modular_components/time_signature_select';
import RegularText from '../../custom/regular_text';

let Filters = ({ history }) => {
    const [show, setShow] = useState(false);
    const [addedTags, setTags] = useState({});
    const [addedTimes, setTimes] = useState({});
    const [enitityTypes, setEntityTypes] = useState({
        users: true,
        tracks: true,
        projects: true
    });

    const toggle = entityType => {
        const newTypes = Object.assign({}, enitityTypes);
        newTypes[entityType] = !newTypes[entityType];
        setEntityTypes(newTypes);
    };

    const clear = () => {
        setTags({});
        setTimes({});
        setEntityTypes({
            users: true,
            tracks: true,
            projects: true
        });
    };

    const checkboxes = () => (
        <View style={styles.checkboxes}>
            <View style={styles.checkboxContainer}>
                <RegularButton
                    styles={checkboxStyles}
                    text={enitityTypes.users ? 'X' : ''}
                    onPress={e => toggle('users')}
                />
                <RegularText text='users' />
            </View>
            <View style={styles.checkboxContainer}>
                <RegularButton
                    styles={checkboxStyles}
                    text={enitityTypes.tracks ? 'X' : ''}
                    onPress={e => toggle('tracks')}
                />
                <RegularText text='projects' />
            </View>
            <View style={styles.checkboxContainer}>
                <RegularButton
                    styles={checkboxStyles}
                    text={enitityTypes.projects ? 'X' : ''}
                    onPress={e => toggle('projects')}
                />
                <RegularText text='tracks' />
            </View>
        </View>
    )

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
                        onPress={e => clear()}
                        text='Clear All' 
                    />}
                </View>
                {show &&
                <View style={styles.filtersContainer}>
                    {checkboxes()}
                    {(enitityTypes.tracks || enitityTypes.projects) && 
                    <TagSuggest setTags={setTags} addedTags={addedTags} allowTagCreation={false} />}
                    {(enitityTypes.tracks || enitityTypes.projects) && 
                    <TimeSignatureSelect setTimes={setTimes} addedTimes={addedTimes} />}
                </View>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        zIndex: 2,
        backgroundColor: '#222222',
    },
    checkboxes: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    content: {
        width: '100%',
        maxWidth: 1200,
        paddingRight: 20,
        paddingLeft: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: 500,
    },
    filtersContainer: {
        marginTop: 10,
        maxWidth: 500
    },
});

const checkboxStyles = {
    regular_button_container: {
        width: 30,
        height: 30,
        marginRight: 10,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
    }
};

export default Filters;
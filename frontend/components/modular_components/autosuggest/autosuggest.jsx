import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

const Autosuggest = ({ 
    bank, // an object of suggestable objects in the form { id1: obj1, id2: obj2 }
    styles, // { autosuggest_container, autosuggest_input, suggestions_container, suggestion_item_container }
    placeholder, // text to be displayed when input is empty
    getSuggestionText, // takes a bank item and returns text to be checked in filterSuggestions
    getSuggestionItem, // takes a bank item and returns a suggestion item component
    onSuggestionSelected, // takes a bank item. fires when item is selected (suggestion list and input are automatically cleared)
}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [input, setInput] = useState('');
    const [listOpen, setList] = useState(true);
    const inputField = useRef(null);

    const handleBlur = e => {
        if (e.relatedTarget) {
            setList(e.currentTarget.contains(e.relatedTarget));
        }
    };

    const handleFocus = e => {
        setList(true);
    };

    const handleSelection = (suggestion) => {
        onSuggestionSelected(suggestion);
        setInput('');
        setSuggestions([]);
        inputField.current.focus();
    };

    const handleChange = e => {
        const value = e.currentTarget.value
        setInput(value);
        filterSuggestions(value);
    };
    
    const escapeRegexCharacters = str => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const filterSuggestions = input => {
        const escapedValue = escapeRegexCharacters(input.trim());
        if (escapedValue === '') {
            return setSuggestions([]);
        }
        const regex = new RegExp('\\b' + escapedValue, 'i');
        const result = Object.values(bank).filter(item => regex.test(getSuggestionText(item)));
        return setSuggestions(result);
    };

    return(
        <View 
            onBlur={e => handleBlur(e)} 
            onFocus={e => handleFocus(e)} 
            style={{ position: 'relative', ...styles.autosuggest_container }}>
            <TextInput
                ref={inputField}
                value={input}
                style={styles.autosuggest_input} 
                placeholder={placeholder} 
                onChange={e => handleChange(e)}
            ></TextInput>
            {suggestions.length && listOpen ?
            <View 
                style={{
                    position: 'absolute', 
                    zIndex: 999,
                    ...styles.suggestions_container
                }}
            >
                {suggestions.map(suggestion => 
                <TouchableOpacity 
                    key={suggestion.id}
                    style={{cursor: 'pointer', ...styles.suggestion_item_container}}
                    onPress={e => handleSelection(suggestion)}
                >
                    {getSuggestionItem(suggestion)}
                </TouchableOpacity>)}
            </View> : null}
        </View>
    );
};

export default Autosuggest;
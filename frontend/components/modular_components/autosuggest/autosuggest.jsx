import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import RegularTextInput from '../../custom/regular_text_input';
import RegularButton from '../../custom/regular_button';

const Autosuggest = ({ 
    wholeBank, // the whole bank of items, used to setNoExactMatches
    smartBank, // an object of suggestable objects excluding added items in the form { id1: obj1, id2: obj2 }
    styles = {}, // autosuggest_container, autosuggest_input, suggestions_container, suggestion_item_container
    placeholder, // text to be displayed when input is empty
    getSuggestionText, // takes a bank item and returns text to be checked in filterSuggestions
    getSuggestionItem, // takes a bank item and returns a suggestion item component
    onSuggestionSelected, // takes a bank item. fires when item is selected (suggestion list and input are automatically cleared)
}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [input, setInput] = useState('');
    const [noExactMatches, setNoExactMatches] = useState(false);
    const inputField = useRef(null);

    const handleBlur = e => {
        const bool = e.currentTarget.contains(e.relatedTarget) 
        if (!bool) {
            setInput('');
            setSuggestions([]);
            setNoExactMatches(false);
        }
    };

    const handleSelection = (suggestion) => {
        onSuggestionSelected(suggestion);
        setInput('');
        setSuggestions([]);
        setNoExactMatches(false);
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
        !wholeBank.includes(input.trim().toLowerCase()) && input ? 
            setNoExactMatches(true) : setNoExactMatches(false);
        const escapedValue = escapeRegexCharacters(input.trim());
        if (escapedValue === '') {
            return setSuggestions([]);
        }
        const regex = new RegExp('\\b' + escapedValue, 'i');
        const result = Object.values(smartBank).filter(item => regex.test(getSuggestionText(item)));
        return setSuggestions(result);
    };

    return(
        <View 
            onBlur={e => handleBlur(e)} 
            style={{ position: 'relative', ...styles.autosuggest_container }}>
            {noExactMatches &&
            <RegularButton text='+' styles={buttonStyles} />}
            <RegularTextInput
                reff={inputField}
                value={input}
                styles={{regular_text_input: styles.autosuggest_input}} 
                placeholder={placeholder} 
                onChange={e => handleChange(e)}
            />
            
            {suggestions.length ?
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

const buttonStyles = {
    regular_button_container: {
        position: 'absolute',
        top: 13,
        right: 5,
        zIndex: 3,
    },
};

export default Autosuggest;
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Autosuggest from './autosuggest';

let TagSuggest = ({ updateTags, addedTags }) => {
    const tags = {
        1: { 
            name: 'rock',
            id: 1 
        },
        2: { 
            name: 'progressive rock',
            id: 2 
        },
        3: { 
            name: 'rock and roll',
            id: 3 
        },
        4: { 
            name: 'hard rock',
            id: 4 
        },
        5: { 
            name: 'alternative rock',
            id: 5 
        },
        6: { 
            name: 'punk rock',
            id: 6 
        },
    };

    const [smartBank, setBank] = useState(tags);

    const placeholder = 'tags'
    const getSuggestionText = tag => tag.name
    const getSuggestionItem = tag => <Text style={styles.text}>{tag.name}</Text>
    const addTag = tag => { 
        updateTags(tag, true);
        const smartBankCopy = Object.assign({}, smartBank);
        delete smartBankCopy[tag.id];
        setBank(smartBankCopy);
    };
    const removeTag = tag => {
        updateTags(tag);
        setBank({ [tag.id]: tag, ...smartBank })
    }

    const addedTagsArray = Object.values(addedTags)

    return(
        <View>
            <Autosuggest 
                bank={smartBank}
                styles={styles}
                placeholder={placeholder}
                getSuggestionText={getSuggestionText}
                getSuggestionItem={getSuggestionItem}
                onSuggestionSelected={addTag}
            />
            {addedTagsArray.map(tag =>
                <Text style={styles.text} key={tag.id}>
                    <Text onPress={e => removeTag(tag)}>X</Text> {tag.name}
                </Text>
            )}
        </View>
    );
};

const styles = { 
    container: {

    }, 
    autosuggest_input: {
        color: 'white',
        padding: 10,
        marginTop: 10,
        border: '1px solid white',
        borderRadius: 3,
    }, 
    text: {
        color: 'white'
    },
    suggestions_container: {
        top: 50,
        zIndex: 2,
        width: '100%',
        border: '1px solid white',
        backgroundColor: 'black',
    }, 
    suggestion_item_container: {
        
    } 
}

export default TagSuggest;
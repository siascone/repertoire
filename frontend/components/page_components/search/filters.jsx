import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

let Filters = ({setFilters}) => {
    const [show, setShow] = useState(false);

    return (
        <View >
            <TouchableOpacity onPress={e => setShow(!show)}>
                <Text style={styles.text}>{show ? 'Close' : 'Show all'}</Text>
            </TouchableOpacity>
            {show ? 
            <Text style={styles.text}>All Filters</Text> 
            : 
            <Text style={styles.text}>Filters</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    text: {
        color: 'white'
    }
})

export default Filters;
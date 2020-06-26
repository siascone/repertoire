import React from 'react';
import { View, Text } from 'react-native';

import Filters from './filters';

let Search = () => {
    return(
        <View>
            <Filters setFilter={setFilter} />
            <Text>Showing results for</Text>
        </View>
    );
};

export default Search;
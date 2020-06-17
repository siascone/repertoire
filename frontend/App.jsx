import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import Page from './components/page';
import { connect } from 'react-redux';

let App = ({ currentUser }) => {
    return(
        <View style={{ flex: 1 }}>
            <Header />
            <Page currentUser={currentUser} />
        </View>
    )
};

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

App = connect(msp, null)(App);

export default App;


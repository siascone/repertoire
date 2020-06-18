import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import Header from './components/header';
import Page from './components/page';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


let App = (props) => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Header 
                history={props.history}
            />
            <Page 
                currentUser={props.currentUser} 
                history={props.history}
            />
        </SafeAreaView>
    );
};

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

App = withRouter(connect(msp, null)(App));

export default App;


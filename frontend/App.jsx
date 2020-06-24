import React from 'react';
import { SafeAreaView } from 'react-native';

import Header from './components/header';
import Page from './components/page';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';

let App = (props) => {
    const [menu, setMenu] = useState(false);

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Header 
                menu={menu}
                setMenu={setMenu}
                history={props.history}
            />
            <Page 
                menu={menu}
                setMenu={setMenu}
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


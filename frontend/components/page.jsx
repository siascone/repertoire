import React from 'react';
import { StyleSheet, View } from 'react-native';
import Splash from './page_components/splash/splash';
import { Switch, Route } from 'react-router-dom';

const Page = ({ currentUser }) => (
    <View style={styles.view}>
        <Switch>
            <Route path='/' component={currentUser ? null : Splash} />
        </Switch>
    </View>
);

const styles = StyleSheet.create({
    view: {
        flex: 9,
        backgroundColor: 'grey',
        overflow: 'scroll'
    }
});

export default Page;
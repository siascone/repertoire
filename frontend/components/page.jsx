import React from 'react';
import { StyleSheet, View } from 'react-native';
import Splash from './page_components/splash/splash';
import { Switch, Route } from 'react-router-dom';
import Error404 from './page_components/errors/error404';

const Page = ({ currentUser }) => (
    <View style={styles.container}>
        <Switch>
            <Route exact path='/' component={currentUser ? null : Splash} />
            <Route component={Error404} />
        </Switch>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: 'slategrey',
        overflow: 'scroll'
    }
});

export default Page;
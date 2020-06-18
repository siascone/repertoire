import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Route } from 'react-router-dom';

import Splash from './page_components/splash/splash';
import MainMenu from './page_components/menus/main_menu';
import Error404 from './page_components/errors/error404';

let Page = ({ currentUser, history }) => (
    <View style={styles.container}>
        <Switch>
            <Route 
                exact path='/' 
                component={currentUser ? 
                    null : Splash
                }
            />
            <Route 
                exact path='/menu'
                render={() => <MainMenu history={history} currentUser={currentUser}/>}
            />
            <Route component={Error404} />
        </Switch>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        backgroundColor: 'slategrey',
        overflow: 'scroll'
    }
});

export default Page;
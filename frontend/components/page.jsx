import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Route } from 'react-router-dom';

import Splash from './page_components/splash/splash';
import MainMenu from './page_components/menus/main_menu';
import Error404 from './page_components/errors/error404';
import Profile from './page_components/profile/profile';
import Feed from './page_components/feed/feed';
import Search from './page_components/search/search';

let Page = ({ currentUser, history, menu, setMenu }) => {
    return(
        <View style={styles.container}>
        {menu ?
            <MainMenu 
                setMenu={setMenu}
                history={history} 
                currentUser={currentUser} 
            /> 
        :
            <Switch>
                <Route 
                    exact path='/' 
                    render={() => currentUser ? 
                        <Feed currentUser={currentUser}/> : <Splash/>
                    }
                />
                <Route 
                    exact path='/menu'
                    render={() => <MainMenu history={history} currentUser={currentUser}/>}
                />
                <Route 
                    exact path='/search'
                    render={() => <Search history={history} currentUser={currentUser}/>}
                />
                <Route 
                    path='/users/:userId'
                    render={() => <Profile history={history} currentUser={currentUser}/>}
                />
                <Route component={Error404} />
            </Switch>
        }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        overflow: 'scroll',
        overflowX: 'hidden',
        width: '100%',
        alignItems: 'center'
    }
});

export default Page;
import React from 'react';
import { AppRegistry } from 'react-native';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id: id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  let Main = () => (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );

  window.state = store.getState;

  AppRegistry.registerComponent('Main', (store) => Main);
  AppRegistry.runApplication('Main', { rootTag: document.getElementById('root') });
})

serviceWorker.unregister();

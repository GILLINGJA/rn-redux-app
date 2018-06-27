import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist';

import { persistor, store } from './src/store.js';
import RootComponent from './containers';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    );
  }
}

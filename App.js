import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import RootComponent from './src/containers';
import {store, persistor } from './src/store.js';
import LoadingView from './src/components/loading.js';

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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppWrapper from './app/index';
import { Provider } from 'react-redux';
import { store } from './app/store';
import runRootSaga from './app/sagas';
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    runRootSaga();
  }

  render() {
    return (
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    );
  }
}

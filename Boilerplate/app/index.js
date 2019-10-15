/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AsyncStorage, AppState } from 'react-native';
import Navigator from './navigator/index';
import Orientation from 'react-native-orientation';
import Utils, { isLandscape, isPortrait } from './utils/utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortraitView: isPortrait(Orientation.getInitialOrientation()) ? Boolean(true) : Boolean(false),
      screenOrientation: Orientation.getInitialOrientation(),
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._orientationDidChange);
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  _orientationDidChange = (orientation) => {
    let isPortraitOrientation = true;
    console.log("orientation:",orientation);
    if (isLandscape(orientation)) {
      isPortraitOrientation = false;
    }
    // Keyboard.dismiss();
    this.setState({
      isPortraitView: isPortraitOrientation,
      screenOrientation: orientation,
    });
  }

  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });
  }

  _handleAppStateChange = (nextAppState) => {
    const { appState } = this.state;
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      Orientation.getOrientation((err, orientation) => {
        this._orientationDidChange(orientation);
      });
    }
    this.setState({ appState: nextAppState });
  }  


  render() {
    const { isPortraitView, screenOrientation } = this.state;
    return (
      <Navigator screenProps={{
          isPortrait: isPortraitView,
          orientation: screenOrientation,
        }}/>
    );
  }
}

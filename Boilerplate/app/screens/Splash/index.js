/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import Navigation from '../../navigator/NavigationService';
import SplashContainer from './components/SplashContainer';

class Splash extends Component {
  constructor(props) {
    super(props);
    Navigation.sharedInstance().setAppNavigation(props.navigation);
    this.state = {
    };
  }
  componentDidMount() {
    setTimeout(() => this.goToScreen('AuthenticationScreen'), 3000);
  }
  goToScreen(screenName) {
    Navigation.sharedInstance().resetRouteName(screenName);
    
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <SplashContainer />
      </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;

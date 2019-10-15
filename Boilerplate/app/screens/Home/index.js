/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    Navigation.sharedInstance().resetRouteName('AuthenticationScreen');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Login.defaultProps = {
  navigation: {},
};

export default Login;

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
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { images } from '../../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
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

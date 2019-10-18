/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Image
} from 'react-native';
import Navigation from '../../navigator/NavigationService';
import SplashContainer from './components/SplashContainer';
import AppIntroSlider from 'react-native-app-intro-slider';
import { images } from '../../assets/images';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: images.contest,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: images.contest,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: images.contest,
    backgroundColor: '#22bcb5',
  }
];

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

class Splash extends Component {
  constructor(props) {
    super(props);
    Navigation.sharedInstance().setAppNavigation(props.navigation);
    this.state = {
      showRealApp: false,
    };
  }
  componentDidMount() {
    // setTimeout(() => this.goToScreen('AuthenticationScreen'), 3000);
  }
  goToScreen(screenName) {
    Navigation.sharedInstance().resetRouteName(screenName);
    
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.mainContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    this.goToScreen('AuthenticationScreen');
    // setTimeout(() => this.goToScreen('AuthenticationScreen'), 1000);
  }

  render() {
    if (this.state.showRealApp) {
      return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <SplashContainer />
        </View>
      );
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
    
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;

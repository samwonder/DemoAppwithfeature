/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Image, ImageBackground, Dimensions
} from 'react-native';
import Navigation from '../../navigator/NavigationService';
import SplashContainer from './components/SplashContainer';
import AppIntroSlider from 'react-native-app-intro-slider';
import { images } from '../../assets/images';

const { height, width } = Dimensions.get('window');

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Smart Management\nEasily know all that is goingon with your livestock, load, carriers.',
    image: images.slideOne,
    backgroundColor: '#ffffff',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: images.slideTwo,
    backgroundColor: '#ffffff',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: images.slideThree,
    backgroundColor: '#ffffff',
  }
];

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    marginBottom: 40,
    
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
    fontSize: 18,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    // marginBottom: 16,
    paddingHorizontal: 10,
  },
});

class Splash extends Component {
  constructor(props) {
    super(props);
    Navigation.sharedInstance().setAppNavigation(props.navigation);
    this.state = {
      showRealApp: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.changeScreen('AuthenticationScreen'), 3000);
  }
  changeScreen() {
    this.setState({
      showRealApp: false,
    });
  }
  goToScreen(screenName) {
    Navigation.sharedInstance().resetRouteName(screenName);
  }
  _renderNextButton = () => {
    return (
      <View style={{height: 40, width: 70,justifyContent: 'center', alignItems: 'center', backgroundColor: '#eac447', borderwidth: 2, bordercolor:'black', borderRadius: 5}}>
        <Text style={{color: 'black', fontSize: 16}}>Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={{height: 40, width: 70,justifyContent: 'center', alignItems: 'center', backgroundColor: '#eac447', borderwidth: 2, bordercolor:'black', borderRadius: 5 }}>
        <Text style={{color: 'black', fontSize: 16}}>Done</Text>
      </View>
    );
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.mainContent}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image style={{height, width}} source={item.image} resizeMode="contain"/>
        {/* <Text style={styles.text}>{item.text}</Text> */}
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
        <View style={{ flex: 1 }}>
          <ImageBackground source={images.splash} style={{width: '100%', height: '100%'}}></ImageBackground>
        </View>
      );
    } else {
      return <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />;
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

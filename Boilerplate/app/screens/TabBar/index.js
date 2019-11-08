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
import ProfileScreen from '../Profile';
import Notification from '../Notification';

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
  iconStyle: {
    height: 25,
    width: 25,
  }
});


class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile
        </Text>
      </View>
    )
  }
}

class ProfileOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          P1
        </Text>
      </View>
    )
  }
}
class ProfileTwo extends Component {
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Notification />
      </View>
    )
  }
}
class ProfileThree extends Component {
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <ProfileScreen />
      </View>
    )
  }
}

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  componentDidMount() {
    // Navigation.sharedInstance().resetRouteName('AuthenticationScreen');
  }

  render() {
    return (
      // <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <TabNavigator style={{flex: 1}}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image style={styles.iconStyle} source={images.homeTabIcon} />}
            renderSelectedIcon={() => <Image style={styles.iconStyle} source={images.homeTabIcon} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image style={styles.iconStyle} source={images.calculateTabIcon} />}
            renderSelectedIcon={() => <Image style={styles.iconStyle} source={images.calculateTabIcon} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <Profile />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'P1'}
            title="P1"
            renderIcon={() => <Image style={styles.iconStyle} source={images.plusTabIcon} />}
            renderSelectedIcon={() => <Image style={styles.iconStyle} source={images.plusTabIcon} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'P1' })}>
            <ProfileOne />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'P2'}
            title="P2"
            renderIcon={() => <Image style={styles.iconStyle} source={images.notificationTabIcon} />}
            renderSelectedIcon={() => <Image style={styles.iconStyle} source={images.notificationTabIcon} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'P2' })}>
            <ProfileTwo />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'P3'}
            title="P3"
            renderIcon={() => <Image style={styles.iconStyle} source={images.optionTabIcon} />}
            renderSelectedIcon={() => <Image style={styles.iconStyle} source={images.optionTabIcon} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'P3' })}>
            <ProfileThree />
          </TabNavigator.Item>
        </TabNavigator>
      // </View>
    );
  }
}

Tabbar.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Tabbar.defaultProps = {
  navigation: {},
};

export default Tabbar;

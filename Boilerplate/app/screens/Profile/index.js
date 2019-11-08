/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { images } from '../../assets/images';
import Description from './components/description';
import UserDetail from './components/userDetail';
import { ScrollView } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',

  },
  userName: {
    fontSize: 24,
    textAlign: 'center',
    margin: 5,
    color: 'white',
  },
  ratingView: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  profileView: {
    flex: 4,
    backgroundColor: 'rgb(66,63,52)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.profileView}>
          <View style={{ flex: 3, flexDirection: 'row'}}>
          <View style={{ flex: 2}}></View>
          <View style={{ flex: 6 }}>
            <Text style={styles.headerText}>
              Profile
            </Text>
          </View>
          <View style={{ flex: 2}}>
          </View>
          </View>
          <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '30%', height: '100%', backgroundColor: 'blue'}}></View>
          </View>
          <View style={{ flex: 3 }}>
          <Text style={styles.userName}>
            Sam Wonder
          </Text>
          <Text style={styles.ratingView}>
            4.5 *
        </Text>
          </View>
        </View>
        <View style={{ flex: 6, margin: 5}}>
          <ScrollView>
          <Description />
          <Description />
          <UserDetail />
          </ScrollView>
        </View>

      </View>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Profile.defaultProps = {
  navigation: {},
};

export default Profile;

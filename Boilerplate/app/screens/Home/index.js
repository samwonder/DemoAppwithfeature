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
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { images } from '../../assets/images';
import TabBar from '../TabBar';


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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={{height: 160, flex: 1,}}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flex: 4, backgroundColor: 'red'}}></View>
      <View style={{ flex: 4, backgroundColor: 'green'}}></View>
      <View style={{ flex: 2, backgroundColor: 'red'}}></View>
    </View>
  );
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabBar />
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

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
    <View style={{height: 140, flex: 1, margin: 5, padding: 5, backgroundColor: 'lightgray', borderRadius: 5}}>
      <View style={{ flex: 4}}>
        <Text style={{color: 'gray', fontSize: 14}}>Pick Up Oct 03</Text>
        <Text style={{ fontSize: 20}}>Dallas, TX 78623</Text>
      </View>
      <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: 'gray', fontSize: 15}}>Drop Off Oct 05</Text>
          <Text style={{ fontSize: 20}}>Dallas, TX 78620</Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, color: 'red'}}>On Route</Text>
          <Text style={{ fontSize: 20}}>$ 5000.00</Text>
        </View>
      </View>
      <View style={{ flex: 2, flexDirection: 'row', top: 5}}>
        <Text style={{ fontSize: 14, color: 'gray', marginRight: 5}}>Trailer: Spread Axle</Text>
        <Text style={{color: 'gray', fontSize: 14, marginRight: 5}}>Live Stock: 10 fats</Text>
        <Text style={{color: 'gray', fontSize: 14}}>Waight: 23k lbs</Text>
      </View>
    </View>
  );
}

class Notification extends Component {
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
        <View style={{height: 60, backgroundColor: 'rgb(66,63,52)', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Notifications</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

Notification.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Notification.defaultProps = {
  navigation: {},
};

export default Notification;

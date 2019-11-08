import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { UIColors } from '../utils/variables';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    marginTop: 10,
    //,
    borderWidth: 1,
    borderRadius: 5,
  },
  activityContainer: {
  },
});


const UserDetail = props => (
  <View style={styles.container}>
    <View style={{backgroundColor: 'gray'}}>
        <View style={{height: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 30, width: 170,}}>
            <Text style={{color: 'white', fontSize: 18}}>US Dot</Text>
          </View>
          <View style={{height: 30, width: 150,}}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Text style={{color: 'white', fontSize: 18, backgroundColor: 'red'}}>Verify</Text>
          </TouchableOpacity>
          </View>
          </View>
          <View style={{height: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 30, width: 170,}}>
            <Text style={{color: 'white', fontSize: 18}}>Email</Text>
          </View>
          <View style={{height: 35, width: 150,}}>
          <Text style={{color: 'white', fontSize: 18}}>abc@xyz.com</Text>
          </View>
          </View>
          <View style={{height: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 30, width: 170,}}>
            <Text style={{color: 'white', fontSize: 18}}>Phone no</Text>
          </View>
          <View style={{height: 30, width: 150,}}>
          <Text style={{color: 'white', fontSize: 18}}>1234567890</Text>
          </View>
          </View>
        </View>
  </View>
);

UserDetail.propTypes = {
  isAnimating: PropTypes.bool,
  color: PropTypes.string,
};

UserDetail.defaultProps = {
  isAnimating: false,
  // color: 'white',
  // color: UIColors.newAppFontBlackColor,
};

export default UserDetail;

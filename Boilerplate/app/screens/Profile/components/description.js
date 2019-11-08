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
    height: 145,
    marginTop: 10,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
  },
  activityContainer: {
  },
});


const Description = props => (
  <View style={styles.container}>
    <View style={{backgroundColor: 'gray'}}>
     <View style={{height: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 30, width: 100,}}>
            <Text style={{color: 'white', fontSize: 18}}>About</Text>
          </View>
          <View style={{height: 30, width: 30,}}>
          <Text style={{color: 'white', fontSize: 18}}>Edit</Text>
          </View>
          </View>
        <View>
        <TextInput
            style={{ height: 80, borderColor: 'lightgray', borderWidth: 0.5, borderRadius: 5 }}
            value={props.description}
            multiline
            numberOfLines={4}
            placeholder="Type here to translate!"
            // onChangeText={(description) => props.setState({description})}
          />
          </View>
          <View style={{height: 32,flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={props._onPressButtonSave}>
              <Text style={{color: 'white', fontSize: 18}}>save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props._onPressButtonCancel}>
              <Text style={{color: 'white', fontSize: 18}}>cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
  </View>
);

Description.propTypes = {
  isAnimating: PropTypes.bool,
  color: PropTypes.string,
};

Description.defaultProps = {
  isAnimating: false,
  // color: 'white',
  // color: UIColors.newAppFontBlackColor,
};

export default Description;

import React from 'react';
import {
  Animated,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../../../assets/images';


const styles = StyleSheet.create({
  splashImg: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

const Header = props => (
  <Animated.Image
    style={[
      styles.splashImg,
      {
        width: props.splashWidth,
        height: props.splashHeight,
      }]
    }
    source={images.contest}
  />
);

Header.propTypes = {
  splashWidth: PropTypes.number.isRequired,
  splashHeight: PropTypes.number.isRequired,
};


export default Header;

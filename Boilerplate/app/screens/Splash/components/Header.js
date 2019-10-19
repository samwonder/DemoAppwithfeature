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
  <Image
    style={{
        width: '100%',
        height: '100%',
      }}
    source={images.splash}
  />
);

Header.propTypes = {
  splashWidth: PropTypes.number.isRequired,
  splashHeight: PropTypes.number.isRequired,
};


export default Header;

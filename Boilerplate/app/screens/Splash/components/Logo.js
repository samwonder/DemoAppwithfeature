import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { images } from '../../../assets/images';
// import { responsiveFontSize } from '../../../utils/utils_functions';

// const resolution = responsiveFontSize(300);

const styles = StyleSheet.create({
  splashImg: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

const Logo = () => (
  <Animated.Image
    style={[
      styles.splashImg,
      {
        width: 300,
        height: 300,
      }]
    }
    source={images.contest}
  />
);

export default Logo;

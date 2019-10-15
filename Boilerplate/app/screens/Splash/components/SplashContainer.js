import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
// import { UIColors } from '../../../utils/variables';
import Logo from './Logo';
import Header from './Header';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: UIColors.defaultBlack,
  },
  splashIconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SplashContainer = props => (
  <View style={styles.backgroundImage}>
    <View style={styles.splashIconView}>
      <Animated.View>
        { !props.showSecondIcon
        ? <Logo />
        : <Header {...props} />
       }
      </Animated.View>
    </View>
  </View>
);

SplashContainer.propTypes = {
  showSecondIcon: PropTypes.bool,
};

SplashContainer.defaultProps = {
  showSecondIcon: false,
};

export default SplashContainer;

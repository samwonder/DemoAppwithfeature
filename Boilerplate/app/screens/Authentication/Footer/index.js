

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { UIColors } from '../../../utils/variables';
import Footer from './Components/Footer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UIColors.newAppButtonGreenBackgroundColor,
  },
});

const FooterContainer = props => (
  <View style={styles.container}>
    <Footer
      openPrivacyPolicy={props.openPrivacyPolicy}
    />
  </View>
);


FooterContainer.propTypes = {
  openPrivacyPolicy: PropTypes.func,
};

FooterContainer.defaultProps = {
  openPrivacyPolicy: () => {},
};


export default FooterContainer;

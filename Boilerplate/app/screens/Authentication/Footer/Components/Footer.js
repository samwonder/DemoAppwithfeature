import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import CustomButton from '../../../../components/CustomButton';
import { authenticationLocalizedString } from '../../../../localization/authenticationLocalizeStrings';
import { UIColors, fontName, spacing, fontSizes } from '../../../../utils/variables';

const styles = StyleSheet.create({
  container: {
    backgroundColor: UIColors.newAppButtonGreenBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.extraSmall,
  },
  headerTabsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: spacing.extraExtraSmall,
    marginTop: spacing.extraExtraSmall,

  },
  headerTabsTextStyle: {
    fontSize: fontSizes.extraSmall,
    color: UIColors.primaryText,
    paddingRight: spacing.extraSmall,
    paddingLeft: spacing.extraSmall,
    fontFamily: fontName.sourceSansProRegular,
  },
  headerTabsTextStyleRight: {
    fontSize: fontSizes.extraSmall,
    color: UIColors.primaryText,
    paddingRight: spacing.extraSmall,
    paddingLeft: spacing.extraSmall,
    fontFamily: fontName.sourceSansProRegular,
  },
  alignTextLeft: {
    alignSelf: 'flex-start',
  },
  alignTextRight: {
    alignSelf: 'flex-end',
  },
});

const Footer = props => (
  <View style={styles.container}>
    <CustomButton
      buttonStyle={styles.headerTabsStyle}
      onPress={() => props.openPrivacyPolicy()}
      buttonTitle={authenticationLocalizedString.privacyPolicy}
      textStyle={styles.headerTabsTextStyleRight}
    />
  </View>
);

Footer.propTypes = {
  openScreen: PropTypes.func,
  openPrivacyPolicy: PropTypes.func,
};

Footer.defaultProps = {
  openScreen: () => {},
  openPrivacyPolicy: () => {},
};

export default Footer;

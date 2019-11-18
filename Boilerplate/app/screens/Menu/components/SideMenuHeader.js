import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { UIColors, spacing, fontSizes, itemSizes, fontName } from '../../../utils/variables';
import { responsiveSize } from '../../../utils/utils';
import { images } from '../../../assets/images';
import { UserData } from '../../../utils/global';
import { toFixTwoDigitAfterDecimal, responsiveFontSize } from '../../../utils/utils_functions';

const viewProfile = responsiveSize(70);

const styles = StyleSheet.create({
  viewProfileContainer: {
    height: viewProfile,
    backgroundColor: UIColors.newAppButtonGreenBackgroundColor,
    justifyContent: 'center',
    borderWidth: 1,
    borderBottomColor: UIColors.newAppYellowColor,
    paddingLeft: responsiveFontSize(25),
  },
  viewProfile: {
    width: itemSizes.avatarCircleLarge,
    height: itemSizes.avatarCircleLarge,
    borderRadius: itemSizes.avatarCircleLarge / 2,
    backgroundColor: UIColors.primaryText,
    borderWidth: spacing.border,
  },
  avatarStyle: {
    width: responsiveSize(50),
    height: responsiveSize(70),
    resizeMode: 'contain',
    marginLeft: responsiveSize(15),
  },
  defaultWhiteLabel: {
    fontSize: fontSizes.extraSmall,
    color: UIColors.newAppYellowColor,
  },
  userNameText: {
    fontSize: fontSizes.medium,
    fontFamily: fontName.sourceSansProBold,
  },
  walletText: {
    fontSize: fontSizes.small,
    fontFamily: fontName.sourceSansProRegular,
    bottom: 0,
    left: 0,
    right: 0,
    color: UIColors.primaryText,
  },
  textView: {
    justifyContent: 'center',
    marginLeft: responsiveSize(15),
  },
  balanceView: {
    height: 25,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: responsiveSize(15),
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    tintColor: UIColors.defaultWhite,
    height: itemSizes.avatarCircleSmall,
    width: itemSizes.iconLarge,
  },
});

const SideMenuHeader = (props) => {
  return (
    <View style={styles.viewProfileContainer}>
      { UserData.BearerToken
      ?
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => props.openProfileScreen()}
          >
            <Image
              source={images.editProfileIcon}
              style={styles.editIcon}
              resizeMode={'contain'}
            />
            <View style={styles.textView}>
              <Text style={[styles.defaultWhiteLabel, styles.userNameText]}>
                {props.userName}
              </Text>
              <Text style={styles.walletText}>
                {`Wallat Balance: ${toFixTwoDigitAfterDecimal(props.balance)}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        :
        <Image
          //source={images.splashLogo}
          style={styles.avatarStyle}
        />
      }
    </View>
  );
};

SideMenuHeader.propTypes = {
  openProfileScreen: PropTypes.func,
  profileImage: PropTypes.string,
  userName: PropTypes.string,
  balance: PropTypes.number,
};

SideMenuHeader.defaultProps = {
  openProfileScreen: () => {},
  profileImage: '',
  userName: '',
  balance: null,
};

export default SideMenuHeader;

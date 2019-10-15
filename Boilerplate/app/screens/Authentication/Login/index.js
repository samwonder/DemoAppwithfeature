import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserActions from '../../../actions';
import { images } from '../../../assets/images';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import ToggleIcon from '../../../components/ToggleIcon';
import { commonLocalizeStrings } from '../../../localization/commonLocalizeStrings';
import { authenticationLocalizedString } from '../../../localization/authenticationLocalizeStrings';
import { isValidEmail, isValidPassword, isEmailText, isValidUsername } from '../../../utils/validators';
import { InputKey, ReturnKeyType, KeyboardType } from '../../../utils/constants';
import { showPopupAlert } from '../../../utils/showAlert';
import { isNetworkConnected } from '../../../utils/utils';
import { UIColors, fontName, itemSizes, spacing, fontSizes } from '../../../utils/variables';

const inputWidth = '90%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.extraSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.8)',
    padding: spacing.large,
    borderRadius: 10,
    width: '95%',
  },
  emailIcon: {
    width: itemSizes.iconMedium,
    height: itemSizes.iconMedium,
    resizeMode: 'cover',
    marginRight: spacing.extraSmall,
    marginLeft: spacing.semiMedium,
  },
  inputMainView: {
    alignSelf: 'stretch',
    height: itemSizes.defaultButtonHeight,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  textInput: {
    height: itemSizes.defaultButtonHeight,
    fontSize: fontSizes.small,
    marginLeft: spacing.semiMedium,
    color: UIColors.secondaryText,
    borderBottomWidth: 1,
    fontFamily: fontName.sourceSansProRegular,
  },
  textInputView: {
    alignSelf: 'stretch',
    width: inputWidth,
  },
  forgotPasswordContainer: {
    alignSelf: 'stretch',
    height: itemSizes.defaultButtonHeight,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: spacing.mediumLarge,
  },
  forgotPasswordButton: {
    height: itemSizes.iconSmall,
    width: itemSizes.iconSmall,
    marginRight: spacing.extraSmall,
    tintColor: UIColors.newAppYellowColor,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    marginRight: spacing.small,
    color: UIColors.defaultBlack,
    fontSize: fontSizes.extraSmall,
    fontFamily: fontName.sourceSansProSemiBold,
  },
  buttonFlex: {
    flexDirection: 'row',
    alignItems: 'flex-end',

  },
  authButton: {
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    backgroundColor: UIColors.newAppButtonGreenBackgroundColor,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isShowPassword: false,
    };
  }

  onChangeEmailText(email) {
    this.setState({ email });
  }

  onChangePasswordText(password) {
    this.setState({ password });
  }

  onSubmitEditing(key) {
    try {
      switch (key) {
        case InputKey.email:
          this.passwordInput.focus();
          break;
        case InputKey.password:
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(' error: ', error);
    }
  }

  getTextInputReference(key, reference) {
    switch (key) {
      case InputKey.email:
        this.emailInput = reference;
        break;
      case InputKey.password:
        this.passwordInput = reference;
        break;
      default:
        break;
    }
  }

  getValidationErrorMessage() {
    const { email, password } = this.state;
    // Email or Username
    if (!email) {
      return commonLocalizeStrings.emptyEmailUsernameErrorMessage;
    }
    if (isEmailText(email)) {
      if (!isValidEmail(email)) {
        return commonLocalizeStrings.invalidEmailErrorMessage;
      }
    } else if (!isValidUsername(email)) {
      return commonLocalizeStrings.incorrectUsernameErrorMessage;
    }
    // Password
    if (!password) {
      return commonLocalizeStrings.emptyPasswordErrorMessage;
    }
    if (!isValidPassword(password)) {
      return commonLocalizeStrings.incorrectPasswordErrorMessage;
    }
    return null;
  }

  loginAction() {
    const { email, password } = this.state;
    const { userLoginRequest } = this.props;
    const errorMessage = this.getValidationErrorMessage();
    if (errorMessage) {
      showPopupAlert(errorMessage);
    } else {
      isNetworkConnected((isConnected) => {
        if (isConnected) {
          userLoginRequest(email, password);
        }
      });
    }
  }

  showPassowrdText() {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  }

  render() {
    const {
      openForgotPasswordScreen,
      screenOrientation,
      facebookAction,
      googleAction,
    } = this.props;
    const {
      email,
      password,
      isShowPassword,
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.subContainer}>
            <View style={styles.inputMainView}>
              <Image style={styles.emailIcon} source={images.email} />
              <CustomTextInput
                textInput={StyleSheet.flatten(styles.textInput)}
                inputView={StyleSheet.flatten(styles.textInputView)}
                placeholderTextColor={UIColors.defaultTextColor}
                placeholder={authenticationLocalizedString.loginText}
                inputKey={InputKey.email}
                getTextInputReference={(key, reference) =>
                  this.getTextInputReference(key, reference)}
                keyboardType={KeyboardType.emailAddress}
                value={email}
                returnKeyType={ReturnKeyType.next}
                onChangeText={value => this.onChangeEmailText(value)}
                onSubmitEditing={key => this.onSubmitEditing(key)}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputMainView}>
              <Image style={styles.emailIcon} source={images.passwordIcon} />
              <CustomTextInput
                textInput={StyleSheet.flatten(styles.textInput)}
                inputView={StyleSheet.flatten(styles.textInputView)}
                placeholder={authenticationLocalizedString.password}
                placeholderTextColor={UIColors.defaultTextColor}
                inputKey={InputKey.password}
                secureTextEntry={!isShowPassword}
                getTextInputReference={(key, reference) =>
                  this.getTextInputReference(key, reference)}
                value={password}
                returnKeyType={ReturnKeyType.done}
                onChangeText={value => this.onChangePasswordText(value)}
                onSubmitEditing={key => this.onSubmitEditing(key)}
              />
              <ToggleIcon
                isShowPassword={isShowPassword}
                showPassowrdText={() => this.showPassowrdText()}
                screenOrientation={screenOrientation}
              />
            </View>
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (isValidEmail(email)) {
                    this.props.resetPasswordLinkRequest(email);
                  } else {
                    alert('Please enter a valid email id')
                  }
                }}
                style={styles.buttonFlex}
              >
                <Image
                  source={images.questionIcon}
                  style={styles.forgotPasswordButton}
                />
                <Text style={styles.forgotPasswordText}>
                  {authenticationLocalizedString.forgotPassword}
                </Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              buttonStyle={styles.authButton}
              onPress={() => this.loginAction()}
              buttonTitle={authenticationLocalizedString.login}
              textStyle={{
                fontSize: fontSizes.small,
                color: UIColors.defaultWhite,
                fontFamily: fontName.sourceSansProRegular,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ color: 'white', fontSize: 16, marginRight: 5, lineHeight: 25 }}>Don't have an account?</Text>
            <CustomButton
              buttonStyle={{}}
              textStyle={{ fontFamily: fontName.sourceSansProSemiBold, color: UIColors.focused, fontSize: 18 }}
              onPress={this.props.onPressSignUp}
              buttonTitle={'Sign Up'}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

Login.propTypes = {
  openForgotPasswordScreen: PropTypes.func,
  userLoginRequest: PropTypes.func,
  facebookAction: PropTypes.func,
  googleAction: PropTypes.func,
  loginAction: PropTypes.func,
  screenOrientation: PropTypes.string,
};

Login.defaultProps = {
  openForgotPasswordScreen: () => {},
  userLoginRequest: () => {},
  facebookAction: () => {},
  googleAction: () => {},
  loginAction: () => {},
  screenOrientation: '',
};

const mapDispatchToProps = () => UserActions;
const LoginScreen = connect(null, mapDispatchToProps)(Login);
export default LoginScreen;

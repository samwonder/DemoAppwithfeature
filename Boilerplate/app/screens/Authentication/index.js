import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserActions from '../../actions';
import Logo from '../../components/Navigation/Logo';
import Menu from "../../components/Navigation/Menu";
import Loader from '../../components/Loader';
import { UIColors } from '../../utils/variables';
import { AuthWelcomeView } from '../../utils/enum';
import { isIphoneX } from '../../utils/platformSpecific';
import {
  responsiveSize,
  sizeWithCurrentOrientation,
  navigationHeight,
} from '../../utils/utils';
import { SCREENS } from '../../utils/av_constants';
import Login from './Login';
import SignUp from './Signup';
import Footer from './Footer';
import { getPrivacyPolicyUrl } from '../../api/urls';
import Navigation from '../../utils/navigation';
import { images } from '../../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UIColors.defaultWhite,
  },
  navigationView: {
    height: navigationHeight,
    alignItems: 'center',
    flexDirection: 'row',
  },
  componentView: {
    flex: 5,
    backgroundColor: UIColors.defaultWhite,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerPortraitView: {
    flex: 9,
  },
  headerLandscapeView: {
    flex: 6,
  },
  introContainerPortrait: {
    flex: 8,
  },
  introContainerLandscape: {
    flex: 5.7,
    flexDirection: 'row',
  },
  introView: {
    flex: 3,
  },
});

class Authentication extends Component {
  openPrivacyPolicy() {
    Navigation.sharedInstance().pushToScreen(SCREENS.WEBVIEW_SCREEN, { data: { url: getPrivacyPolicyUrl, name: 'Privacy Policy' } });
  }

  openScreen(currentAuthWelcomeView) {
    const { openLoginView, openSignupView } = this.props;
    switch (currentAuthWelcomeView) {
      case AuthWelcomeView.AUTH_LOGIN:
        return (openLoginView());
      case AuthWelcomeView.AUTH_SIGNUP:
        return (openSignupView());
      default:
        return (openLoginView());
    }
  }

  renderLogin = () => {
    const { screenProps } = this.props;
    return (
      <Login
        onPressSignUp={() => this.openScreen(AuthWelcomeView.AUTH_SIGNUP)}
        screenOrientation={screenProps.orientation}
      />
    );
  }

  renderSignup = () => {
    const { screenProps } = this.props;
    return (
      <SignUp
        screenOrientation={screenProps.orientation}
        onPressSignIn={() => this.openScreen(AuthWelcomeView.AUTH_LOGIN)}
      />);
  }

  renderCurrentView = (currentAuthWelcomeView) => {
    switch (currentAuthWelcomeView) {
      case AuthWelcomeView.AUTH_LOGIN:
        return (this.renderLogin());
      case AuthWelcomeView.AUTH_SIGNUP:
        return (this.renderSignup());
      default:
        return (this.renderLogin());
    }
  }
  rightButtonAction() {
    Navigation.sharedInstance().popScreen();
  }

  render() {
    const {
      currentAuthWelcomeView, screenProps, isLoading,
    } = this.props;
    const { screenHeight } = sizeWithCurrentOrientation(screenProps.orientation);
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled
          extraHeight={responsiveSize(100)}
          keyboardShouldPersistTaps="handled"
          enableAutoAutomaticScroll
          enableOnAndroid
        >
          <View style={{
            flex: 1,
            backgroundColor: UIColors.defaultWhite,
            height: screenHeight,
            width: '100%',
          }}
          >
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={images.LogoWithText} style={{height: 200, width: '80%'}}></Image>
            </View>
            <View style={{flex: 3, backgroundColor: 'green'}}>
              <View style={styles.componentView}>
                {this.renderCurrentView(currentAuthWelcomeView)}
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        {isLoading && <Loader isAnimating={isLoading} />}
      </View>
    );
  }
}

Authentication.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
  screenProps: PropTypes.objectOf(PropTypes.any),
  currentAuthWelcomeView: PropTypes.number,
  isLoading: PropTypes.bool,
  openAuthForgotPasswordView: PropTypes.func,
  openForgotPasswordView: PropTypes.func,
  openLoginView: PropTypes.func,
  openSignupView: PropTypes.func,
  openAuthWelcomeView: PropTypes.func,
  resetFetchLeaderboard: PropTypes.func,
};

Authentication.defaultProps = {
  navigation: {},
  screenProps: {},
  currentAuthWelcomeView: AuthWelcomeView.AUTH_WELCOME,
  isLoading: false,
  openAuthForgotPasswordView: () => {},
  openForgotPasswordView: () => {},
  openLoginView: () => {},
  openSignupView: () => {},
  openAuthWelcomeView: () => {},
  resetFetchLeaderboard: () => {},
};

const mapStateToProps = state => ({
  currentAuthWelcomeView: state.authWelcomeReducer.currentAuthWelcomeView,
  isLoading: state.loaderReducers.isLoading,
});

const mapDispatchToProps = () => UserActions;
const AuthenticationScreen = connect(mapStateToProps, mapDispatchToProps)(Authentication);
export default AuthenticationScreen;


import { bindActionCreators } from 'redux';
import { store } from '../store';
import { getDemoRequest, getDemoSuccess, getDemoFailure } from './demoAction';
import {
  userRegisterRequest,
  userLoginRequest,
  resetPasswordRequest,
  resetlogout,
  getEmailRequest,
  resetPasswordLinkRequest,
  logoutRequest,
  // Forgot View Actions
  openForgotPasswordView,
  openPasswordRecoveryConfirmationView,
  openPasswordRecoverySuccessView,
  openResetLinkConfirmationView,
  openResetLinkRecoverySuccessView,
  openWelcomeView,
  // Auth View Actions
  openLoginView,
  openSignupView,
  openAuthForgotPasswordView,
  openAuthWelcomeView,
  resetPasswordInAppRequest,
} from './authentication';

const actions = {
  getDemoRequest,
  getDemoSuccess,
  getDemoFailure,
  userRegisterRequest,
  userLoginRequest,
  resetPasswordRequest,
  resetlogout,
  getEmailRequest,
  resetPasswordLinkRequest,
  logoutRequest,
  // Forgot View Actions
  openForgotPasswordView,
  openPasswordRecoveryConfirmationView,
  openPasswordRecoverySuccessView,
  openResetLinkConfirmationView,
  openResetLinkRecoverySuccessView,
  openWelcomeView,
  // Auth View Actions
  openLoginView,
  openSignupView,
  openAuthForgotPasswordView,
  openAuthWelcomeView,
  resetPasswordInAppRequest,
}; 

export default bindActionCreators(actions, store.dispatch);

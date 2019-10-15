// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

export const commonLocalizeStrings = new LocalizedStrings({
  // English
  en: {
    // Messages
    internalServerErrorMessage: 'The request failed due to an internal server error.',
    serverErrorMessage: 'Sorry, Something Went Wrong: Please try again later.',
    sessionErrorMessage: 'Sorry, Your session has expired. Please login again to continue play.',
    noInternetConnection: {
      header: 'No Internet Connection Available',
      message: 'Please check your internet connection.',
    },
    emptyEmailUsernameErrorMessage: 'Please enter email address or username.',
    emptyEmailErrorMessage: 'Please enter email address.',
    invalidEmailErrorMessage: 'Your e-mail is incorrect.',
    emptyUsernameErrorMessage: 'Please enter username.',
    invalidUsernameErrorMessage: 'Username complexity requirement not met. Supports alphabets and numbers no special characters with min 3 and max 30 characters.',
    emptyPasswordErrorMessage: 'Please enter password.',
    invalidPasswordErrorMessage: 'Password complexity requirement not met. Length should be 8-70 characters and include: 1 uppercase, 1 lowercase, 1 digit and 1 special character.',
    incorrectUsernameErrorMessage: 'Your username is incorrect.',
    incorrectPasswordErrorMessage: 'Your password is incorrect.',
    emptySecurityAnswerErrorMessage: 'Please enter answer.',
    workInProgressMessage: 'Work in Progress.',
    enterStakeValue: 'Please enter stake amount to place the bets.',
    pleaseLogin: 'You need to Sign in before continue',

  },
});

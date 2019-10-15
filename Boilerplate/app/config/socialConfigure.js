
import { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { LoginManager } from 'react-native-fbsdk';
import { isIOS } from '../utils/platformSpecific';
import { androidClientId, iosClientId } from './appConfig';

export default class SocialConfigure extends Component {
  static facebook() {
    const behaviour = isIOS ? 'web' : 'web_only';
    LoginManager.setLoginBehavior(behaviour);
    LoginManager.logOut();
  }

  static async googleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        androidClientId,
        iosClientId,
        offlineAccess: false,
      });
    } catch (error) {
      console.log('Google signin error', error);
    }
  }

  static async googleLogout() {
    try {
      await GoogleSignin && GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }
}

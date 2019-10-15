import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../screens/Splash';
import HomeScreen from '../screens/Home';
import AuthenticationScreen from '../screens/Authentication';


import { responsiveSize } from '../utils/utils';

// Drawer stack

// const DrawerStack = createDrawerNavigator({
//     LoginScreen: {
//       screen: LoginScreen,
//       key: 'LoginScreen',
//       navigationOptions: {
//         header: null,
//         gesturesEnabled: false,
//       },
//     },
//   }, {
//     initialRouteName: 'LoginScreen',
//     contentComponent: LoginScreen,
//     drawerWidth: responsiveSize(285),
//     drawerPosition: 'right',
//   });
  
  const RootNavigator = createStackNavigator({
    // DrawerStack: {
    //   screen: DrawerStack,
    // },
    Splash: {
      screen: Splash,
      key: 'SplashScreen',
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    HomeScreen: {
      screen: HomeScreen,
      key: 'HomeScreen',
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    AuthenticationScreen: {
      screen: AuthenticationScreen,
      key: 'AuthenticationScreen',
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },{
    initialRouteName: 'Splash',
    headerMode: 'none',
  });
  
  const AppContainer = createAppContainer(RootNavigator);
  export default AppContainer;

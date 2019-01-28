import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { ProfileScreen } from '../screens/ProfileScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AboutAppScreen } from '../screens/AboutAppScreen';
import { colors } from '../values/colors';

export const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  Contact: {
    screen: ContactScreen,
  },
  AboutApp: {
    screen: AboutAppScreen,
  },
}, {
  initialRouteName: 'Profile',
  navigationOptions: {
    headerStyle: {
      backgroundColor: `${colors.white}`,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headerTintColor: `${colors.primary}`,
  },
  mode: 'modal',
});
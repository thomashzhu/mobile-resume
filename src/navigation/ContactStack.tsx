import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { ContactScreen } from '../screens/ContactScreen';
import { AboutAppScreen } from '../screens/AboutAppScreen';
import { colors } from '../values/colors';

export const ContactStack = createStackNavigator({
  Contact: {
    screen: ContactScreen,
  },
  AboutApp: {
    screen: AboutAppScreen,
  },
}, {
  initialRouteName: 'Contact',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#FFFFFF',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headerTintColor: `${colors.primary}`,
  },
  mode: 'modal',
});
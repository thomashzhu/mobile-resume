import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { ExperiencesScreen } from '../screens/ExperiencesScreen';
import { ExperienceDetailScreen } from '../screens/ExperienceDetailScreen';
import { colors } from '../values/colors';

export const ExperiencesStack = createStackNavigator({
  Experiences: {
    screen: ExperiencesScreen,
  },
  ExperienceDetail: {
    screen: ExperienceDetailScreen,
  },
}, {
  initialRouteName: 'Experiences',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#FFFFFF',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headerTintColor: `${colors.primary}`,
  },
  mode: 'modal',
});
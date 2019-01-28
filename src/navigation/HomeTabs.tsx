import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { ProfileStack } from './ProfileStack';
import { ExperiencesStack } from './ExperiencesStack';
import { SkillsScreen } from '../screens/SkillsScreen';
import { RecognitionsScreen } from '../screens/RecognitionsScreen';
import { colors } from '../values/colors';

const getTabBarIcon = (icon: string) => ({ tintColor }: { tintColor: string }) => (
  <FontAwesome
    name={icon}
    size={24}
    style={{ color: tintColor }}
  />
);

export const HomeTabs = createBottomTabNavigator({
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('user'),
      tabBarLabel: 'Profile',
    },
  },
  Experiences: {
    screen: ExperiencesStack,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('briefcase'),
      tabBarLabel: 'Experiences',
    },
  },
  Skills: {
    screen: SkillsScreen,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('github'),
      tabBarLabel: 'Skills',
    },
  },
  Recognitions: {
    screen: RecognitionsScreen,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('trophy'),
      tabBarLabel: 'Recognitions',
    },
  },
}, {
  initialRouteName: 'Profile',
  tabBarOptions: {
    activeTintColor: `${colors.primary}`,
    inactiveTintColor: `${colors.secondary}`,
    showIcon: true,
    showLabel: true,
    style: {
      backgroundColor: '#FFFFFF',
    },
    indicatorStyle: null,
  },
});

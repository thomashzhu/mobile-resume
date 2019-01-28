import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import { ProfileStack } from './ProfileStack';
import { EducationScreen } from '../screens/EducationScreen';
import { ExperiencesStack } from './ExperiencesStack';
import { SkillsScreen } from '../screens/SkillsScreen';
import { RecognitionScreen } from '../screens/RecognitionScreen';
import { colors } from '../values/colors';

const getTabBarIcon = (icon: string) => ({ tintColor }: { tintColor: string }) => (
  <Ionicons
    name={icon}
    size={24}
    style={{ color: tintColor }}
  />
);

export const HomeTabs = createBottomTabNavigator({
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('md-person'),
      tabBarLabel: 'Profile',
    },
  },
  Education: {
    screen: EducationScreen,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('md-school'),
      tabBarLabel: 'Education',
    },
  },
  Experiences: {
    screen: ExperiencesStack,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('ios-briefcase'),
      tabBarLabel: 'Experiences',
    },
  },
  Skills: {
    screen: SkillsScreen,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('logo-github'),
      tabBarLabel: 'Skills',
    },
  },
  Recognition: {
    screen: RecognitionScreen,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('md-trophy'),
      tabBarLabel: 'Recognition',
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

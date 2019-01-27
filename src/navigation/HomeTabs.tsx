import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { HighlightsScreen } from '../screens/HighlightsScreen';
import { ExperiencesScreen } from '../screens/ExperiencesScreen';
import { SkillsScreen } from '../screens/SkillsScreen';
import { RecognitionsScreen } from '../screens/RecognitionsScreen';
import { ProfileStack } from './ProfileStack';
import { colors } from '../values/colors';

const getTabBarIcon = (icon: string) => ({ tintColor }: { tintColor: string }) => (
  <FontAwesome
    name={icon}
    size={24}
    style={{ color: tintColor }}
  />
);

export const HomeTabs = createBottomTabNavigator({
  Highlights: {
    screen: HighlightsScreen,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('star'),
      tabBarLabel: 'Highlights',
    },
  },
  Experiences: {
    screen: ExperiencesScreen,
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
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: getTabBarIcon('envelope'),
      tabBarLabel: 'Profile',
    },
  },
}, {
  initialRouteName: 'Highlights',
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

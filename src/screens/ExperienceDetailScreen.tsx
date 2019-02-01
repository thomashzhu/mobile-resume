import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  NavigationScreenConfig,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { ContentCell } from '../components/ContentCell';
import { colors } from '../values/colors';
import { HORIZONTAL_SPACE, VERTICAL_SPACE } from '../values/constants';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

interface NavigationFunctionComponent<T> extends React.FunctionComponent<T> {
  navigationOptions: NavigationScreenConfig<NavigationScreenOptions>;
}

export const ExperienceDetailScreen: NavigationFunctionComponent<Props> = (props) => {
  const { navigation: { state: { params }}} = props;
  const { experience } = params;
  const {
    id, title, organization, fromDate, toDate, location, descriptions,
  } = experience;

  return (
    <SafeAreaView style={styles.container}>
      <ContentCell
        isSingleView
        key={id}
        title={title}
        organization={organization}
        fromDate={fromDate}
        toDate={toDate}
        location={location}
        descriptions={descriptions}
      />
    </SafeAreaView>
  );
};

ExperienceDetailScreen.navigationOptions = ({ navigation: { state: { params }}}) => ({
  headerTintColor: `${colors.primary}`,
  title: '',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: VERTICAL_SPACE,
    paddingBottom: VERTICAL_SPACE,
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  headerButton: {
    color: `${colors.primary}`,
    paddingHorizontal: 16,
  },
  circleButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    zIndex: 1,
  },
});

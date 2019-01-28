import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  NavigationScreenConfig,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { Constants } from 'expo';

import { ContentCell } from '../components/ContentCell';
import { colors } from '../values/colors';
import { CircleButton } from '../components/CircleButton';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

interface NavigationFunctionComponent<T> extends React.FunctionComponent<T> {
  navigationOptions: NavigationScreenConfig<NavigationScreenOptions>;
}

export const ExperienceDetailScreen: NavigationFunctionComponent<Props> = (props) => {
  const { navigation: { goBack, state: { params }}} = props;
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

      <CircleButton
        backgroundColor={colors.primary}
        buttonSize={64}
        iconColor={colors.white}
        iconSize={36}
        name="close"
        onPress={() => goBack()}
        style={styles.circleButton}
      />
    </SafeAreaView>
  );
};
ExperienceDetailScreen.navigationOptions = {
  header: null,
};

const statusBarHeight = (Platform.OS === 'ios' && Number(Platform.Version) >= 11
  ? 0
  : Constants.statusBarHeight
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight + VERTICAL_SPACE,
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  headerButton: {
    color: `${colors.primary}`,
    paddingHorizontal: 16,
  },
  circleButton: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    zIndex: 1,
  },
});

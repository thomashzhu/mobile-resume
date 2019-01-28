import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  NavigationScreenConfig,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import { ContentCell } from '../components/ContentCell';
import { colors } from '../values/colors';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <ContentCell
        key={id}
        title={title}
        organization={organization}
        fromDate={fromDate}
        toDate={toDate}
        location={location}
        descriptions={descriptions}
      />
    </ScrollView>
  );
};
ExperienceDetailScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <MaterialIcons
      name="close"
      size={24}
      style={styles.headerButton}
      onPress={() => navigation.goBack()}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_SPACE,
    paddingTop: VERTICAL_SPACE,
  },
  headerButton: {
    color: `${colors.primary}`,
    paddingHorizontal: 16,
  },
});

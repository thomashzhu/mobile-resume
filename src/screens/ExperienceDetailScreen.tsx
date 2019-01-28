import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationScreenConfig,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import { ExperienceCell } from '../components/ExperienceCell';
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
    id, position, company, fromDate, toDate, location, descriptions,
  } = experience;

  return (
    <View style={styles.container}>
      <ExperienceCell
        key={id}
        position={position}
        company={company}
        fromDate={fromDate}
        toDate={toDate}
        location={location}
        descriptions={descriptions}
      />
    </View>
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

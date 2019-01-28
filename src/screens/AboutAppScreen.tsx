import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { colors } from '../values/colors';
import { CircleButton } from '../components/CircleButton';

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

type State = {
  
};

export class AboutAppScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>

        </ScrollView>

        <CircleButton
          backgroundColor={colors.primary}
          buttonSize={64}
          iconColor={colors.white}
          iconSize={36}
          name="close"
          onPress={() => navigation.goBack()}
          style={styles.circleButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

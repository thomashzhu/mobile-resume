import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '../values/colors';

type Props = {
  
};

type State = {
  
};

export class AboutAppScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation: { goBack } }) => ({
    title: 'About this app',
    headerLeft: (
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => goBack()}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>About this app</Text>
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
});

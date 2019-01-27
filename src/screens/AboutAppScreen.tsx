import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../values/colors';

type Props = {
  
};

type State = {
  
};

export class AboutAppScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation: { goBack } }) => ({
    title: 'About this app',
    headerLeft: (
      <MaterialIcons
        name="close"
        size={24}
        style={styles.headerButton}
        onPress={() => goBack()}
      />
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

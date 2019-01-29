import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../values/colors';

type Props = {
  text: string;
};

export const CircledText: React.FunctionComponent<Props> = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: `${colors.secondary}`,
    borderRadius: 7,
    borderWidth: 1,
    margin: 4,
    paddingHorizontal: 8,
  },
  text: {
    lineHeight: 28,
  },
});

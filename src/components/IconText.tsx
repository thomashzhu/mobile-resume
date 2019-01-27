import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../values/colors';

type Props = {
  icon: string;
  text: string;
};

export const IconText: React.FunctionComponent<Props> = ({ icon, text }) => (
  <View style={styles.container}>
    <MaterialIcons
      name={icon}
      size={18}
      style={styles.icon}
    />
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  text: {
    color: `${colors.secondary}`,
  },
  icon: {
    color: `${colors.primary}`,
    marginHorizontal: 4,
  },
});

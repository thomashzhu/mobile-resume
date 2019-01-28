import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { colors } from '../values/colors';

type Props = {
  name: string;
  description: string;
  stars: number;
};

export const LanguageCell: React.FunctionComponent<Props> = ({ name, description, stars }) => (
  <View style={styles.container}>
    <View style={styles.leftColumn}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>

    <View style={styles.rightColumn}>
      {Array.from(new Array(stars), (val, index) => index).map(index => (
        <Octicons
          key={index}
          name="primitive-dot"
          size={16}
          style={styles.dot}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  name: {
    color: `${colors.secondary}`,
    textAlignVertical: 'center',
  },
  description: {
    color: `${colors.secondary.alpha(0.6)}`,
  },
  rightColumn: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    color: `${colors.primary}`,
    marginRight: 2,
  },
});

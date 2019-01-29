import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { colors } from '../values/colors';

type Props = {
  skill: string;
};

export const SkillCell: React.FunctionComponent<Props> = ({ skill }) => (
  // TouchableWithoutFeedback still shows opacity
  <TouchableOpacity activeOpacity={1}>
    <Animated.Text style={styles.item}>
      {skill}
    </Animated.Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    borderColor: `${colors.secondary}`,
    borderRadius: 7,
    borderWidth: 1,
    lineHeight: 28,
    margin: 4,
    paddingHorizontal: 8,
  },
});

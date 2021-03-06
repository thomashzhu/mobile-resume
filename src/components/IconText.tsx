import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

import { colors } from '../values/colors';

type Props = {
  icon: string;
  onPress?: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>,
};

export const IconText: React.FunctionComponent<Props> = ({
  icon, onPress, text, textStyle,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={18}
          style={styles.icon}
        />
      </View>

      <Text style={[styles.text, textStyle || {}]}>
        {text}
      </Text>

      {onPress && (
        <Entypo
          name="link"
          size={14}
          style={styles.anchorIcon}
        />
      )}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 4,
    width: 24,
  },
  icon: {
    color: `${colors.secondary}`,
    marginHorizontal: 4,
  },
  text: {
    color: `${colors.secondary}`,
  },
  anchorIcon: {
    color: `${colors.secondary}`,
    marginLeft: 3,
    marginTop: 2, // Setting alignItem to center in parent container still shows offset
  },
});

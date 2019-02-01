import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { colors } from '../values/colors';

type Props = {
  children: JSX.Element[] | JSX.Element | string,
  style?: StyleProp<ViewStyle>,
};

export const P: React.FunctionComponent<Props> = (props) => (
  <Text {...props} style={[styles.p, props.style || {}]}>
    {props.children}
  </Text>
);

export const B: React.FunctionComponent<Props> = (props) => (
  <Text {...props} style={[styles.b, props.style || {}]}>
    {props.children}
  </Text>
);

export const UL: React.FunctionComponent<Props> = (props) => (
  <View {...props} style={[styles.ul, props.style || {}]}>
    {props.children}
  </View>
);

export const LI: React.FunctionComponent<Props> = (props) => (
  <Text {...props} style={[styles.li, props.style || {}]}>
    {` \u2022  ${props.children}`}
  </Text>
);

const baseStyle = {
  color: `${colors.secondary}`,
  fontSize: 16,
  lineHeight: 24,
  marginBottom: 10,
};

const styles = StyleSheet.create({
  p: baseStyle,
  b: {
    ...baseStyle,
    fontWeight: 'bold',
  },
  ul: {
    marginBottom: 10,
  },
  li: {
    ...baseStyle,
    marginBottom: 5,
  },
});

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

type State = {};

export class SkillCell extends React.Component<Props, State> {
  scale = new Animated.Value(1);

  handlePressIn = () => {
    Animated.spring(this.scale, {
      toValue: 0.85,
      useNativeDriver: true,
    }).start();
  };

  handlePressOut = () => {
    Animated.spring(this.scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { skill } = this.props;

    const animatedStyle = {
      transform: [{ scale: this.scale }],
    };

    return (
      // TouchableWithoutFeedback still shows opacity
      <TouchableOpacity 
        activeOpacity={1}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
        <Animated.Text style={[styles.item, animatedStyle]}>
          {skill}
        </Animated.Text>
      </TouchableOpacity>
    );
  }
}

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

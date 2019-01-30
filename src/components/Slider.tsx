import React from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../values/colors';
import { Draggable } from './Draggable';

const FULL_SLIDER_QUALIFICATION_RATIO = 0.90;

type Props = {
  size: number;
  reset: boolean;
  onSlideToEnd: () => Promise<boolean>;
};

export class Slider extends React.Component<Props> {
  left = new Animated.Value(0);

  containerWidth: number;

  state = {
    didSlideToEnd: false,
  };

  handleTouchStart = () => {};

  handleTouchMove = (left: number) => {
    const { size } = this.props;
    // Make sure 0 <= left <= this.containerWidth - size
    this.left.setValue(Math.max(0, Math.min(left, this.containerWidth - size)));
  };

  handleTouchEnd = (left: number) => {
    const { onSlideToEnd, size } = this.props;

    if (left < this.containerWidth * FULL_SLIDER_QUALIFICATION_RATIO - size) {
      Animated.timing(this.left, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();

    } else {
      Animated.timing(this.left, {
        toValue: this.containerWidth - size,
        useNativeDriver: true,
      }).start();

      this.setState({ didSlideToEnd: true }, async () => {
        const successful = await onSlideToEnd();
        if (!successful) this.resetSlider();
      });
    }
  };

  resetSlider = () => {
    Animated.timing(this.left, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    this.setState({ didSlideToEnd: false });
  };

  render() {
    const { size } = this.props;
    const { didSlideToEnd } = this.state;

    const containerStyle = {
      backgroundColor: `${colors.secondary.alpha(0.10)}`,
      borderRadius: size / 2,
      height: size,
    };

    const sliderCircleStyle = {
      borderRadius: size / 2,
      height: size,
      width: size,
    };

    return (
      <View
        onLayout={({nativeEvent: { layout: { width }}}) => this.containerWidth = width}
        style={containerStyle}
      >
        <View style={styles.sliderTextContainer}>
          <Text style={styles.sliderText}>
            {didSlideToEnd ? 'Loading...' : 'Slide to send'}
          </Text>
        </View>

        <Draggable
          enabled={!didSlideToEnd}
          onTouchStart={this.handleTouchStart}
          onTouchMove={({ left }) => this.handleTouchMove(left)}
          onTouchEnd={({ left }) => this.handleTouchEnd(left)}
        >
          {({ handlers }) => {
            const transformStyle = {
              transform: [{ translateX: this.left }],
            };

            return (
              <Animated.View
                {...handlers}
                style={[styles.sliderCircle, sliderCircleStyle, transformStyle]}
              >
                <ActivityIndicator
                  animating={didSlideToEnd}
                  color={`${colors.white}`}
                  size="small"
                />
              </Animated.View>
            );
          }}
        </Draggable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderTextContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderCircle: {
    alignItems: 'center',
    backgroundColor: `${colors.primary}`,
    justifyContent: 'center',
  },
  sliderText: {
    color: `${colors.secondary}`,
    fontSize: 16,
  },
});

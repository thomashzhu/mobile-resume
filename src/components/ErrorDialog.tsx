import React from 'react';
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../values/colors';

type Props = {
  error?: string;
  onDismiss: () => void;
  style?: StyleProp<ViewStyle>,
  visible: boolean;
};

type State = {};

export class ErrorDialog extends React.Component<Props, State> {
  opacity = new Animated.Value(0);

  componentDidMount() {
    this.playOpacityAnimation();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.error) this.playOpacityAnimation();
  }

  playOpacityAnimation = () => {
    Animated.timing(this.opacity, {
      duration: 350,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { onDismiss, error, visible } = this.props;
    
    if (!error || !visible) return null;

    const opacityStyle = {
      opacity: this.opacity,
    };

    return (
      <Animated.View style={[styles.container, opacityStyle]}>
        <Text style={styles.errorText}>{error}</Text>

        <View style={styles.iconContainer}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={onDismiss}
            style={styles.icon}
          />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: `${colors.primary}`,
    borderRadius: 8,
    flexDirection: 'row',
    margin: 16,
    padding: 16,
    position: 'absolute',
    zIndex: 1,
  },
  iconContainer: {
    marginLeft: 8,
  },
  icon: {
    color: `${colors.white}`,
  },
  errorText: {
    color: `${colors.white}`,
    flex: 1,
    lineHeight: 22,
  },
});

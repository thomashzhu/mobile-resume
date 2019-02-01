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
  autoDismissInterval?: number;
  error?: string;
  onDismiss: () => void;
  style?: StyleProp<ViewStyle>,
  visible: boolean;
};

type State = {};

export class ErrorDialog extends React.Component<Props, State> {
  intervalId: number;
  opacity = new Animated.Value(0);

  componentDidMount() {
    this.showErrorDialog();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.error) this.showErrorDialog();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  showErrorDialog = () => {
    Animated.timing(this.opacity, {
      duration: 350,
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      this.startTimer();
    });
  }

  startTimer = () => {
    const { autoDismissInterval, onDismiss } = this.props;

    if (autoDismissInterval && autoDismissInterval > 0) {
      this.stopTimer();
      this.intervalId = setInterval(() => {
        // return statement is used to override setInterval (from the timers library) 
        // which has the same method name, but different return value type
        return onDismiss();
      }, autoDismissInterval);
    }
  };

  stopTimer = () => {
    if (this.intervalId) clearInterval(this.intervalId);
  };

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

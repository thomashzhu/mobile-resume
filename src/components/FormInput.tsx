import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '../values/colors';

type Props = {
  label: string;
  name: string;
  onChangeText: (name: string, value: string) => void;
  placeholder: string;
};
const DEFAULT_PROPS = {
  placeholder: '',
};

type State = {
  value: string;
};

export class FormInput extends React.Component<Props & typeof DEFAULT_PROPS, State> {
  static defaultProps = DEFAULT_PROPS;

  state = {
    error: '',
    value: '',
  };

  handleChangeText = (name: string, value: string) => {
    this.setState({ value });

    const { onChangeText } = this.props;
    onChangeText(name, value);
  };

  render() {
    const { label, name } = this.props;
    const { error, value } = this.state;

    return (
      <View style={styles.container}>
        <Text>{label}</Text>

        <TextInput
          onChangeText={(value) => this.handleChangeText(name, value)}
          value={value}
        />

        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {

  },
  error: {
    color: `${colors.alert}`,
  },
});

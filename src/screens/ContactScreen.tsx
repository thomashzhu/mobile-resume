import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Header,
  NavigationScreenConfig,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';

import { ContactForm } from '../components/ContactForm';
import { colors } from '../values/colors';
import { ReduxState } from '../reducers';
import { ContactFormReduxState } from '../reducers/contact_form';
import { ErrorDialog } from '../components/ErrorDialog';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {
  contactForm: ContactFormReduxState,
  navigation: NavigationScreenProp<NavigationState>,
  clearContactForm: () => void;
};

type State = {};

export class _ContactScreen extends React.Component<Props, State> {
  static navigationOptions: NavigationScreenConfig<NavigationScreenOptions> = ({ navigation }) => ({
    title: 'Message',
    headerLeft: (
      <MaterialIcons
        name="close"
        size={24}
        style={styles.headerButton}
        onPress={() => navigation.goBack()}
      />
    ),
  });

  state = {
    error: '',
  };

  componentWillUnmount() {
    const { clearContactForm } = this.props;
    clearContactForm();
  }

  handleError = (error: string) => {
    this.setState({ error });
  }

  handleDismiss = () => {
    this.setState({ error: '' });
  }

  render() {
    const { navigation } = this.props;
    const { error } = this.state;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1 }}
          keyboardVerticalOffset={Header.HEIGHT + 20}
        >
          <ContactForm
            onFormSubmitted={() => navigation.goBack()}
            onError={this.handleError}
            style={styles.contactForm}
          />
        </KeyboardAvoidingView>

        {!!error && (
          <ErrorDialog
            error={error}
            onDismiss={this.handleDismiss}
            visible
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactForm: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_SPACE,
    paddingVertical: VERTICAL_SPACE,
  },
  headerButton: {
    color: `${colors.primary}`,
    paddingHorizontal: 16,
  },
});

export const ContactScreen = (() => {
  const mapStateToProps = (state: ReduxState) => ({
    contactForm: state.contactForm,
  });

  const { clearContactForm } = require('../actions/contact_form_actions');

  const mapDispatchToProps = {
    clearContactForm,
  };

  return connect(mapStateToProps, mapDispatchToProps)(_ContactScreen);
})();


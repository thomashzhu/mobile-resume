import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
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
import { Result } from 'expo-background-fetch';

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

  componentWillUnmount() {
    const { clearContactForm } = this.props;
    clearContactForm();
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Header.HEIGHT + 20}
        style={styles.container}
      >
        <ContactForm style={styles.contactForm} />
      </KeyboardAvoidingView>
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


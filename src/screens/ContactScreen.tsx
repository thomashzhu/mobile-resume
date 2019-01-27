import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { Constants } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Header,
  NavigationScreenConfig,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ContactForm } from '../components/ContactForm';
import { colors } from '../values/colors';
import { ReduxState } from '../reducers';
import { ContactFormReduxState } from '../reducers/contact_form';
import { ScrollView } from 'react-native-gesture-handler';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {
  contactForm: ContactFormReduxState,
  navigation: NavigationScreenProp<NavigationState>,
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

  handleLayout = (e) => {

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

  const mapDispatchToProps = {};

  return connect(mapStateToProps, mapDispatchToProps)(_ContactScreen);
})();


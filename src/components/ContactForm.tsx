import React from 'react';
import {
  Alert,
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import validator from 'validator';

import { ReduxState } from '../reducers/index';
import { ContactFormReduxState } from '../reducers/contact_form';
import { colors } from '../values/colors';
import { sendEmail } from '../utils/send_email';
import { Slider } from './Slider';

const SLIDER_SIZE = 48;

type Props = {
  contactForm: ContactFormReduxState,
  clearContactForm: () => void;
  onError: (error: string) => void;
  onFormSubmitted: () => void;
  updateContactFormField: (name: string, value: string) => void;
  style?: StyleProp<ViewStyle>,
};
const DEFAULT_PROPS = {
  style: {},
};

type State = {
  shouldResetSlider: boolean;
};

export class _ContactForm extends React.Component<Props & typeof DEFAULT_PROPS, State> {
  static defaultProps = DEFAULT_PROPS;

  scale = new Animated.Value(1);
  shouldResetSlider = false;

  handleChangeText = (name: string) => (
    (value: string) => {
      const { updateContactFormField } = this.props;
      updateContactFormField(name, value);
    }
  );

  handleSlideToEnd = async () => {
    const {
      contactForm, clearContactForm, onError, onFormSubmitted,
    } = this.props;
    const { name, email, phone, message } = contactForm;

    if (!name || !email || !message) {
      onError('Please make sure name, email and message are filled out.');
      return false;
    }
    if (!validator.isEmail(email)) {
      onError('Unrecognized email format');
      return false;
    }
    if (phone && !validator.isMobilePhone(phone, 'en-US')) {
      onError('Unrecognized phone number format');
      return false;
    }

    try {
      await sendEmail({
        to: 'dev@thomaszhu.com',
        subject: `Message from ${name} (${email})`,
        body: `${message}\n\nPhone: ${phone}`,
      });

      clearContactForm();
      onFormSubmitted();

      return true;
    } catch (error) {
      Alert.alert('Error', `${error}`);
      return false;
    }
  };


  render() {
    const { contactForm, style } = this.props;
    const { name, email, phone, message } = contactForm;

    return (
      <View style={[styles.container, style]}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={this.handleChangeText('name')}
          placeholder="John Doe"
          style={styles.inputField}
          underlineColorAndroid="transparent"
          value={name}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={this.handleChangeText('email')}
          placeholder="john.doe@gmail.com"
          style={styles.inputField}
          underlineColorAndroid="transparent"
          value={email}
        />

        <Text style={styles.label}>Phone (optional)</Text>
        <TextInput
          keyboardType="phone-pad"
          onChangeText={this.handleChangeText('phone')}
          placeholder="000-000-0000"
          style={styles.inputField}
          underlineColorAndroid="transparent"
          value={phone}
        />

        <Text style={styles.label}>Message</Text>
        <ScrollView style={styles.messageContainer}>
          <TextInput
            multiline
            onChangeText={this.handleChangeText('message')}
            placeholder="Message"
            style={styles.messageField}
            underlineColorAndroid="transparent"
            value={message}
          />
        </ScrollView>

        <Slider
          onSlideToEnd={this.handleSlideToEnd}
          reset={this.shouldResetSlider}
          size={SLIDER_SIZE}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: `${colors.secondary}`,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  inputField: {
    marginTop: 6,
    marginBottom: 16,
  },
  messageContainer: {
    flex: 1,
    marginVertical: 6,
  },
  messageField: {
    height: 96,
  },
  submitButton: {
    alignItems: 'center',
    borderRadius: 24,
    height: 46,
    justifyContent: 'center',
  },
  submitButtonText: {
    color: `${colors.white}`,
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 1.2,
  },
});

export const ContactForm = (() => {
  const mapStateToProps = (state: ReduxState) => ({
    contactForm: state.contactForm,
  });

  const {
    clearContactForm, updateContactFormField,
  } = require('../actions/contact_form_actions');

  const mapDispatchToProps = {
    clearContactForm,
    updateContactFormField,
  };

  return connect(mapStateToProps, mapDispatchToProps)(_ContactForm);
})();


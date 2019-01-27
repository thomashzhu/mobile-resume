import React from 'react';
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';

import { ReduxState } from '../reducers/index';
import { ContactFormReduxState } from '../reducers/contact_form';
import { colors } from '../values/colors';
import { validateEmail } from '../utils/validate';
import { sendEmail } from '../utils/send_email';

type Props = {
  contactForm: ContactFormReduxState,
  updateContactFormField: (name: string, value: string) => void;
  style?: StyleProp<ViewStyle>,
};
const DEFAULT_PROPS = {
  style: {},
};

type State = {
  
};

export class _ContactForm extends React.Component<Props & typeof DEFAULT_PROPS, State> {
  static defaultProps = DEFAULT_PROPS;

  scale = new Animated.Value(1);

  handleChangeText = (name: string) => (
    (value: string) => {
      const { updateContactFormField } = this.props;
      updateContactFormField(name, value);
    }
  );

  handleSubmitPress = async () => {
    const { contactForm } = this.props;
    const { name, email, phone, message } = contactForm;

    if (!name || !email || !message) return;
    if (!validateEmail(email)) return;

    try {
      await sendEmail({
        to: 'dev@thomaszhu.com',
        subject: `Message from ${name} (${email})`,
        body: `${message}\n\nPhone: ${phone}`,
      });
    } catch(e) {
      console.log(e);
    }
  };

  handleSubmitPressIn = () => {
    Animated.spring(this.scale, {
      toValue: 0.85,
      useNativeDriver: true,
    }).start();
  };

  handleSubmitPressOut = () => {
    Animated.spring(this.scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { contactForm, style } = this.props;
    const { name, email, phone, message } = contactForm;

    const animatedStyle = {
      transform: [{ scale: this.scale }],
    };

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
            underlineColorAndroid="transparent"
            value={message}
          />
        </ScrollView>

        <TouchableWithoutFeedback
          onPress={this.handleSubmitPress}
          onPressIn={this.handleSubmitPressIn}
          onPressOut={this.handleSubmitPressOut}
        >
          <Animated.View style={[styles.submitButton, animatedStyle]}>
            <Text style={styles.submitButtonText}>Send</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
  submitButton: {
    alignItems: 'center',
    borderRadius: 24,
    justifyContent: 'center',
    backgroundColor: `${colors.primary}`,
    height: 40,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 1.2,
  },
});

export const ContactForm = (() => {
  const mapStateToProps = (state: ReduxState) => ({
    contactForm: state.contactForm,
  });

  const { updateContactFormField } = require('../actions/contact_form_actions');

  const mapDispatchToProps = {
    updateContactFormField,
  };

  return connect(mapStateToProps, mapDispatchToProps)(_ContactForm);
})();


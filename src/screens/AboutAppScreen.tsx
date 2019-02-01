import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

import { colors } from '../values/colors';
import { CircleButton } from '../components/CircleButton';

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

type State = {};

export class AboutAppScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.paragraph}>
            <Text style={styles.text}>
              This app is for showcase and personal coding practice only. Therefore I try to use as few third-party libraries 
              (especially UI libraries) as possible.
            </Text>
          </View>

          <View style={styles.paragraph}>
            <Text style={styles.text}>Here is a list of libraries used in this app:</Text>
            <Text style={styles.text}> - react & react-native </Text>
            <Text style={styles.text}> - react navigation </Text>
            <Text style={styles.text}> - redux & react-redux </Text>
            <Text style={styles.text}> - qs </Text>
            <Text style={styles.text}> - validator </Text>
          </View>

          <View style={styles.paragraph}>
            <Text style={styles.text}>
              I will be randomly improving this app as I learn more about React Native. Some improvements include integrating 
              reCAPTCHA and Mailgun to send direct email to my mailbox, use folding cells for list display, and add app intro sliders, 
              etc. Of course, if there's a change on my resume, I will update here as well.
            </Text>
          </View>

          <View style={styles.paragraph}>
            <Text style={styles.text}>That's it for now. Thank you. =]</Text>
          </View>
        </ScrollView>

        <CircleButton
          backgroundColor={colors.primary}
          buttonSize={64}
          iconColor={colors.white}
          iconSize={36}
          name="close"
          onPress={() => navigation.goBack()}
          style={styles.circleButton}
        />
      </View>
    );
  }
}

const statusBarHeight = Constants.statusBarHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight + VERTICAL_SPACE,
    marginHorizontal: HORIZONTAL_SPACE,
  },
  paragraph: {
    marginBottom: 10,
  },
  text: {
    color: `${colors.secondary}`,
    fontSize: 16,
    lineHeight: 24,
  },
  circleButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    zIndex: 1,
  },
});

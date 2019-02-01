import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Constants } from 'expo';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { HORIZONTAL_SPACE, VERTICAL_SPACE } from '../values/constants';
import { colors } from '../values/colors';
import { CircleButton } from '../components/CircleButton';
import { P, UL, LI } from '../components/HTMLComponents';

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <P>
            This app is for showcase and personal coding practice only. Therefore I try to use as few third-party libraries 
            (especially UI libraries) as possible.
          </P>

          <UL>
            <P>Here is a list of libraries used in this app:</P>
            <LI>react & react-native</LI>
            <LI>react navigation</LI>
            <LI>redux & react-redux</LI>
            <LI>qs</LI>
            <LI>validator</LI>
          </UL>

          <P>
            I will be randomly improving this app as I learn more about React Native. Some improvements include integrating 
            reCAPTCHA and Mailgun to send direct email to my mailbox, use folding cells for list display, and add app intro sliders, 
            etc. Of course, if there's a change on my resume, I will update here as well.
          </P>

          <P>That's it for now. Thank you. =]</P>

          {/* Add padding to prevent circle button from blocking text */}
          <View style={styles.blankSpace} />
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
    marginHorizontal: HORIZONTAL_SPACE,
    marginTop: statusBarHeight + VERTICAL_SPACE,
  },
  circleButton: {
    bottom: VERTICAL_SPACE + 8,
    position: 'absolute',
    right: 8,
    zIndex: 1,
  },
  blankSpace: {
    marginTop: 72,
  },
});

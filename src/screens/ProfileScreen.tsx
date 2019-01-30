import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MapView, WebBrowser } from 'expo';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { colors } from '../values/colors';
import { IconText } from '../components/IconText';
import { LanguageCell } from '../components/LanguageCell';
import { Divider } from '../components/Divider';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {};

type State = {
  isAvatarShowing: boolean;
};

export class ProfileScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation: { navigate }}) => ({
    title: 'Profile',
    headerLeft: (
      <MaterialIcons
        name="message"
        size={24}
        style={styles.headerButton}
        onPress={() => navigate('Contact')}
      />
    ),
    headerRight: (
      <MaterialIcons
        name="info-outline"
        size={24}
        style={styles.headerButton}
        onPress={() => navigate('AboutApp')}
      />
    ),
  });

  handleGitHubLinkPress = () => {
    WebBrowser.openBrowserAsync('https://github.com/thomashzhu');
  };

  render() {
    const { width } = Dimensions.get('window');
    const borderRadiusStyle = {
      borderRadius: (width - 2 * HORIZONTAL_SPACE) / 3 / 2,
    };
    
    return (
      <View style={styles.container}>
        <View style={styles.columns}>
          <View style={styles.leftColumn}>
            <Text style={styles.name}>Thomas Zhu</Text>
            <IconText
              icon="ios-mail"
              text="dev@thomaszhu.com"
            />
            <IconText icon="ios-phone-portrait" text="510-908-0318" />
            <IconText
              icon="logo-github"
              onPress={this.handleGitHubLinkPress}
              text="github.com/thomashzhu"
            />
          </View>

          <View style={styles.rightColumn}>
            <Image
              source={require('../resources/avatar.png')}
              style={[styles.avatar, borderRadiusStyle]}
            />
          </View>
        </View>

        <View style={styles.quoteBlock}>
          <FontAwesome
            name="quote-left"
            size={18}
            style={styles.leftQuotation}
          />
          <Text style={styles.quote}>I’m a self-motivated mobile developer who always seeks to learn new things. Formerly a financial analyst.</Text>
          <FontAwesome
            name="quote-right"
            size={18}
            style={styles.rightQuotation}
          />
        </View>

        <View style={styles.languageBlock}>
          <LanguageCell
            name="English"
            description="Proficient"
            stars={4}
          />
          <Divider
            horizontal={false}
            padding={VERTICAL_SPACE / 2}
            spacing={HORIZONTAL_SPACE}
          />
          <LanguageCell
            name="Chinese"
            description="Native"
            stars={5}
          />
        </View>

        <View style={styles.map}>
          <MapView
            initialRegion={{
              latitude: 37.7661,
              latitudeDelta: 0.09020,
              longitude: -122.4314,
              longitudeDelta: 0.1141,
            }}
            style={StyleSheet.absoluteFill}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    color: `${colors.primary}`,
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  columns: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_SPACE,
    paddingVertical: VERTICAL_SPACE,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  name: {
    color: `${colors.secondary}`,
    fontSize: 28,
    fontWeight: '300',
    letterSpacing: 1,
    paddingVertical: 4,
    textTransform: 'uppercase',
  },
  avatar: {
    aspectRatio: 1,
    height: null,
    width: null,
  },
  quoteBlock: {
    backgroundColor: `${colors.quoteBackground}`,
    paddingHorizontal: HORIZONTAL_SPACE * 2.25,
    paddingVertical: HORIZONTAL_SPACE,
    marginBottom: VERTICAL_SPACE,
  },
  leftQuotation: {
    color: `${colors.secondary}`,
    position: 'absolute',
    top: 8,
    left: 12,
  },
  quote: {
    color: `${colors.secondary}`,
    fontStyle: 'italic',
    lineHeight: 18,
  },
  rightQuotation: {
    color: `${colors.secondary}`,
    position: 'absolute',
    bottom: 8,
    right: 12,
  },
  languageBlock: {
    flexDirection: 'row',
    height: 42,
    paddingHorizontal: HORIZONTAL_SPACE,
    marginBottom: VERTICAL_SPACE,
  },
  map: {
    flex: 1,
  },
});

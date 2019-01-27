import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { MapView } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../values/colors';
import { IconText } from '../components/IconText';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {
  
};

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
            <IconText icon="email" text="dev@thomaszhu.com" />
            <IconText icon="phone" text="510-908-0318" />
            <IconText icon="location-on" text="San Francisco Bay Area" />
          </View>

          <View style={styles.rightColumn}>
            <Image
              source={require('../resources/avatar.png')}
              style={[styles.avatar, borderRadiusStyle]}
            />
          </View>
        </View>

        <View style={styles.quoteBlock}>
          <Text style={styles.quote}>I’m a self-motivated mobile developer who always seeks to learn new things. Formerly a financial analyst.</Text>
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
    paddingHorizontal: HORIZONTAL_SPACE,
    paddingVertical: VERTICAL_SPACE,
  },
  quote: {
    color: `${colors.secondary}`,
    fontStyle: 'italic',
  },
  map: {
    flex: 1,
    marginTop: VERTICAL_SPACE,
  },
});

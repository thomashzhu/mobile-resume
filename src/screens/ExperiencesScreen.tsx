import React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  View,
  ListRenderItemInfo,
} from 'react-native';
import { Constants } from 'expo';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { ExperienceCell } from '../components/ExperienceCell';
import { Divider } from '../components/Divider';
import { EXPERIENCES_DATA } from '../resources/data';
import { Experience } from '../values/types';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

type State = {
  
};

export class ExperiencesScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  handleShowDetailPress = (item: Experience) => (
    () => {
      const { navigation: { navigate }} = this.props;
      navigate('ExperienceDetail', { experience: item });
    }
  );

  renderExperienceItem = (info: ListRenderItemInfo<Experience>) => {
    const { item, index } = info;
    const {
      id, position, company, fromDate, toDate, location, descriptions,
    } = item;

    return (
      <View>
        <ExperienceCell
          key={id}
          position={position}
          company={company}
          fromDate={fromDate}
          toDate={toDate}
          location={location}
          descriptions={descriptions}
          onShowDetailLinkPress={this.handleShowDetailPress(item)}
        />

        {this.renderSeparator(index)}
      </View>
    );
  }

  renderSeparator = (index: number) => {
    if (index !== EXPERIENCES_DATA.length - 1) {
      return (
        <Divider
          horizontal
          padding={6}
          spacing={VERTICAL_SPACE}
        />
      );
    } else {
      return (
        <View style={styles.lastItem} />
      );
    }
  }

  render() {
    return (
      <View style={styles.safeAreaView}>
        <FlatList
          data={EXPERIENCES_DATA}
          keyExtractor={({ id }) => id.toString()}
          renderItem={this.renderExperienceItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const statusBarHeight = (Platform.OS === 'ios' && Number(`${Platform.Version}`) >= 11
  ? 0
  : Constants.statusBarHeight
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: statusBarHeight,
    paddingHorizontal: HORIZONTAL_SPACE,
    paddingTop: VERTICAL_SPACE,
  },
  lastItem: {
    marginBottom: VERTICAL_SPACE,
  },
});

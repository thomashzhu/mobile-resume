import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Constants } from 'expo';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { ContentCell } from '../components/ContentCell';
import { Divider } from '../components/Divider';
import { EXPERIENCES_DATA } from '../resources/data';
import { Content } from '../values/types';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

type State = {};

export class ExperiencesScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  handleShowDetailPress = (item: Content) => (
    () => {
      const { navigation: { navigate }} = this.props;
      navigate('ExperienceDetail', { experience: item });
    }
  );

  renderExperienceItem = (info: ListRenderItemInfo<Content>) => {
    const { item, index } = info;
    const {
      id, title, organization, fromDate, toDate, location, descriptions,
    } = item;

    return (
      <View>
        <ContentCell
          key={id}
          title={title}
          organization={organization}
          fromDate={fromDate}
          toDate={toDate}
          location={location}
          descriptions={descriptions}
          maxBulletsVisible={3}
          onShowDetailLinkPress={this.handleShowDetailPress(item)}
          isSingleView={false}
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
    }
    return <View style={styles.bottomSpace} />;
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={EXPERIENCES_DATA}
          keyExtractor={({ id }) => id.toString()}
          renderItem={this.renderExperienceItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
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
    marginTop: statusBarHeight + VERTICAL_SPACE,
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  bottomSpace: {
    marginTop: VERTICAL_SPACE,
  },
});

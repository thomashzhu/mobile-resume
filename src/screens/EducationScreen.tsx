import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { Constants } from 'expo';

import { EDUCATION_DATA } from '../resources/data';
import { Content } from '../values/types';
import { ContentCell } from '../components/ContentCell';
import { Divider } from '../components/Divider';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {
  
};

type State = {
  
};

export class EducationScreen extends React.Component<Props, State> {
  renderEducationItem = (info: ListRenderItemInfo<Content>) => {
    const { item, index } = info;
    const {
      id, title, organization, fromDate, toDate, location, summary, descriptions,
    } = item;

    return (
      <View>
        <ContentCell
          isSingleView={false}
          key={id}
          title={title}
          organization={organization}
          fromDate={fromDate}
          toDate={toDate}
          location={location}
          summary={summary}
          descriptions={descriptions}
        />

        {this.renderSeparator(index)}
      </View>
    );
  }

  renderSeparator = (index: number) => {
    if (index !== EDUCATION_DATA.length - 1) {
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
          data={EDUCATION_DATA}
          keyExtractor={({ id }) => id.toString()}
          renderItem={this.renderEducationItem}
          style={styles.list}
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
  },
  list: {
    paddingTop: VERTICAL_SPACE,
  },
  lastItem: {
    marginBottom: VERTICAL_SPACE,
  },
});

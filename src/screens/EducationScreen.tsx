import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Constants, WebBrowser } from 'expo';

import { EDUCATION_DATA } from '../resources/data';
import { Content } from '../values/types';
import { ContentCell } from '../components/ContentCell';
import { Divider } from '../components/Divider';
import { HORIZONTAL_SPACE, VERTICAL_SPACE } from '../values/constants';

type Props = {};

type State = {};

export class EducationScreen extends React.Component<Props, State> {
  handlePressOrganization = (organizationUrl?: string) => (
    !organizationUrl ? undefined : () => {
      WebBrowser.openBrowserAsync(organizationUrl);
    }
  );

  renderEducationItem = (info: ListRenderItemInfo<Content>) => {
    const { item, index } = info;
    const {
      id, title, organization, organizationUrl, fromDate, toDate, location, summary, descriptions,
    } = item;

    return (
      <View>
        <ContentCell
          isSingleView={false}
          key={id}
          title={title}
          organization={organization}
          onPressOrganization={this.handlePressOrganization(organizationUrl)}
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
    }
    return <View style={styles.blankSpace} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={EDUCATION_DATA}
          keyExtractor={({ id }) => id.toString()}
          renderItem={this.renderEducationItem}
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
    // TODO: Temporary solution to ExpoKit bug that splash screen will always remain visible on Android
    backgroundColor: Platform.OS === 'ios' ? null : '#FFFFFF',
    flex: 1,
    marginTop: statusBarHeight + VERTICAL_SPACE,
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  blankSpace: {
    marginTop: VERTICAL_SPACE,
  },
});

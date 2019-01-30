import React from 'react';
import {
  Platform,
  SafeAreaView,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';

import { CircledText } from '../components/CircledText';
import { colors } from '../values/colors';
import { SKILLS_DATA } from '../resources/data';

const VERTICAL_SPACE = 16;

type Props = {};

type State = {};

export class SkillsScreen extends React.Component<Props, State> {
  sectionData = SKILLS_DATA.map(section => ({
    ...section, data: [section.title],
  }));

  skillMap = SKILLS_DATA.reduce((result, { title, data }) => ({
    ...result, [title]: data,
  }), {});

  renderSkillSectionHeader = ({ section }: { section: SectionListData<string> }) => {
    const { title } = section;
    
    return <Text style={styles.header}>{title}</Text>;
  }

  renderSkillSectionListItem = (info: SectionListRenderItemInfo<string>) => {
    const { item } = info;

    /*
      TODO: FlatList doesn't support flexWrap, so rendering all cells in a single FlatList
      doesn't work yet. Check back later.
    */
    return (
      <View style={styles.itemGroup}>
        {this.skillMap[item].map((skill: string) => (
          <CircledText
            key={skill}
            text={skill}
          />
        ))}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <SectionList
          keyExtractor={(item: string) => item}
          renderItem={this.renderSkillSectionListItem}
          renderSectionHeader={this.renderSkillSectionHeader} 
          sections={this.sectionData}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
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
    paddingHorizontal: 16,
  },
  header: {
    color: `${colors.primary}`,
    fontSize: 18,
    paddingVertical: 8,
    textTransform: 'uppercase',
  },
  itemGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

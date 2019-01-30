import React from 'react';
import {
  Platform,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';
import { EvilIcons } from '@expo/vector-icons';

import { colors } from '../values/colors';
import { RECOGNITION_DATA } from '../resources/data';

const HORIZONTAL_SPACE = 16;
const VERTICAL_SPACE = 16;

type Props = {};

type State = {};

export class RecognitionScreen extends React.Component<Props, State> {
  renderRecognitionSectionHeader = ({ section }: { section: SectionListData<string> }) => {
    const { title } = section;
    
    return <Text style={styles.header}>{title}</Text>;
  }

  renderRecognitionSectionListItem = (info: SectionListRenderItemInfo<string>) => {
    const { item, index } = info;
    
    return (
      <Text
        key={index}
        style={styles.description}
      >
        {`\u2022  ${item}`}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.safeAreaView}>
        <SectionList
          keyExtractor={(item) => item}
          renderItem={this.renderRecognitionSectionListItem}
          renderSectionHeader={this.renderRecognitionSectionHeader} 
          sections={RECOGNITION_DATA}
          stickySectionHeadersEnabled={false}
          style={styles.list}
        />

        <View style={styles.iconContainer}>
          <EvilIcons
            name="trophy"
            size={240}
            style={styles.backgroundIcon}
          />
        </View>
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
    backgroundColor: null,
  },
  header: {
    color: `${colors.primary}`,
    fontSize: 18,
    paddingVertical: 8,
    textTransform: 'uppercase',
  },
  description: {
    color: `${colors.secondary}`,
    fontSize: 15,
    lineHeight: 35,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundIcon: {
    position: 'absolute',
    bottom: 12,
    color: `${colors.black.alpha(0.15)}`,
  },
});

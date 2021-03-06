import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { colors } from '../values/colors';
import { Divider } from './Divider';

const VERTICAL_SPACE = 16;

type Props = {
  title: string;
  organization: string;
  onPressOrganization?: () => void;
  fromDate: string;
  toDate?: string;
  location: string;
  summary?: string;
  descriptions: string[];
  onShowDetailLinkPress?: () => void;
  maxBulletsVisible?: number;
  isSingleView: boolean;
};

export const ContentCell: React.FunctionComponent<Props> = (props) => {
  const {
    title, organization, onPressOrganization, fromDate, toDate, location, summary, 
    descriptions, onShowDetailLinkPress, maxBulletsVisible, isSingleView,
  } = props;

  const getDescription = (description: string, index: number) => (
    <Text
      key={index}
      style={styles.description}
    >
      {`\u2022  ${description}`}
    </Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity
        activeOpacity={onPressOrganization ? 0.5 : 1}
        onPress={onPressOrganization}
        style={styles.organizationContainer}
      >
        <Text style={styles.organization}>{organization}</Text>

        {onPressOrganization && (
          <Entypo
            name="link"
            size={14}
            style={styles.organizationAnchorIcon}
          />
        )}
      </TouchableOpacity>

      <View style={styles.infoRow}>
        <Entypo
          name="calendar"
          size={16}
        />
        <Text style={styles.interval}>
          {`${fromDate} - ${toDate}`}
        </Text>

        <Entypo
          name="location-pin"
          size={16}
        />
        <Text style={styles.location}>
          {location}
        </Text>
      </View>

      <View style={styles.descriptionGroup}>
        {isSingleView && (
          <Divider
            horizontal
            spacing={VERTICAL_SPACE}
          />
        )}

        {summary && <Text style={styles.description}>{summary}</Text>}

        {onShowDetailLinkPress && descriptions.length > maxBulletsVisible ? (
          <View>
            { descriptions.slice(0, maxBulletsVisible).map(getDescription) }

            <TouchableOpacity
              onPress={onShowDetailLinkPress}
              style={styles.showDetailLink}
            >
              <Text style={styles.showDetail}>Show more...</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.descriptionGroup}
            showsVerticalScrollIndicator={false}
          >
            {descriptions.map(getDescription)}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: `${colors.secondary}`,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 4,
  },
  organizationContainer: {
    flexDirection: 'row',
  },
  organization: {
    color: `${colors.primary}`,
    marginBottom: 5,
  },
  organizationAnchorIcon: {
    color: `${colors.primary}`,
    marginLeft: 3,
    marginTop: 2, // Setting alignItem to center in parent container still shows offset
  },
  infoRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 4,
  },
  interval: {
    color: `${colors.secondary}`,
    fontSize: 12,
    marginLeft: 4,
    marginRight: 16,
  },
  location: {
    color: `${colors.secondary}`,
    fontSize: 12,
    marginLeft: 2,
  },
  showDetailLink: {
    alignItems: 'center',
    marginTop: VERTICAL_SPACE / 2,
  },
  showDetail: {
    color: `${colors.secondary}`,
  },
  descriptionGroup: {
    flexGrow: 1,
  },
  description: {
    color: `${colors.secondary}`,
    lineHeight: 20,
  },
});

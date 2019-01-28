import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { colors } from '../values/colors';

const VERTICAL_SPACE = 16;

type Props = {
  position: string;
  company: string;
  fromDate: string;
  toDate?: string;
  location: string;
  descriptions: string[];
  onShowDetailLinkPress?: () => void;
};

export const ExperienceCell: React.FunctionComponent<Props> = (props) => {
  const {
    position, company, fromDate, toDate, location, descriptions, onShowDetailLinkPress,
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
      <Text style={styles.position}>{position}</Text>
      
      <Text style={styles.company}>{company}</Text>

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

      <View>
        {onShowDetailLinkPress && descriptions.length >= 3 ? (
          <View>
            { descriptions.slice(0, 2).map(getDescription) }

            <TouchableOpacity
              onPress={onShowDetailLinkPress}
              style={styles.showDetailLink}
            >
              <Text style={styles.showDetail}>Show more...</Text>
            </TouchableOpacity>
          </View>
        ) : (
          descriptions.map(getDescription)
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  position: {
    color: `${colors.secondary}`,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 4,
  },
  company: {
    color: `${colors.primary}`,
    marginBottom: 5,
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
  description: {
    color: `${colors.secondary}`,
    lineHeight: 20,
  },
});

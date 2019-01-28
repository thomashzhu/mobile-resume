import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { colors } from '../values/colors';

type Props = {
  position: string;
  company: string;
  fromDate: string;
  toDate?: string;
  location: string;
  descriptions: string[];
};

export const ExperienceCell: React.FunctionComponent<Props> = ({
  position, company, fromDate, toDate, location, descriptions,
}) => (
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

    <View style={styles.descriptions}>
      {descriptions.map((description, index) => (
        <Text
          key={index}
          style={styles.description}
        >
          {`\u2022  ${description}`}
        </Text>
      ))}
    </View>
  </View>
);

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
  descriptions: {
  },
  description: {
    color: `${colors.secondary}`,
    lineHeight: 20,
  },
});

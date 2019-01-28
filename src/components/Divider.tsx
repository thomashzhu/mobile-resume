import React from 'react';
import { View } from 'react-native';

import Color from 'color';

type Props = {
  color?: Color,
  horizontal?: boolean;
  padding?: number;
  size?: number;
  spacing?: number;
};
const DEFAULT_PROPS = {
  color: Color('#848484'),
  horizontal: true,
  padding: 0,
  size: 1,
  spacing: 0,
};

export const Divider: React.FunctionComponent<Props> = ({
  color, horizontal, padding, size, spacing,
}) => {
  const sharedStyle = {
    backgroundColor: `${color}`,
  };

  if (horizontal) {
    const horizontalStyle = {
      height: size,
      paddingHorizontal: padding,
      marginVertical: spacing,
    };
    return <View style={[sharedStyle, horizontalStyle]} />;
  } else {
    const verticalStyle = {
      width: size,
      paddingVertical: padding,
      marginHorizontal: spacing,
    };
    return <View style={[sharedStyle, verticalStyle]} />;
  }
};
Divider.defaultProps = DEFAULT_PROPS;


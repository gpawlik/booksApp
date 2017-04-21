import React from 'react';
import { View } from 'react-native';
import StarIcon from 'common/components/Icons/StarIcon';
import StarHalfIcon from 'common/components/Icons/StarHalfIcon';

import s from './styles';

export default ({ stars, style }) => {
  const starsRating = items => {
    let result = [];

    for(let i = 0; i < items; i++) {
      result.push(<StarIcon key={i} />);
    }
    if(items % 1 > 0) {
      result.push(<StarHalfIcon key={Math.ceil(items)} />);
    }
    return result;
  };

  return (
    <View style={[s.container, style]}>{starsRating(stars)}</View>
  );
};

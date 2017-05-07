import React from 'react';
import { View } from 'react-native';
import StarIcon from 'common/components/Icons/StarIcon';
import StarHalfIcon from 'common/components/Icons/StarHalfIcon';

import s from './styles';

export default ({ stars, style }) => {
  const starsRating = items => {
    let result = [];
    const fullStars = Math.round(items);

    for(let i = 0; i < fullStars; i++) {
      result.push(<StarIcon key={i} />);
    }
    if(items - fullStars > 0.25) {
      result.push(<StarHalfIcon key={Math.ceil(items)} />);
    }
    return result;
  };

  return (
    <View style={[s.container, style]}>{starsRating(stars)}</View>
  );
};

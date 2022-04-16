import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';

import {Container} from './styles';

type Props = {
  rating: number;
};

function calculateStarsRating(rating: number) {
  if (rating <= 1) {
    return [0, 0, 0, 0, 0];
  }
  if (rating <= 3) {
    return [1, 0, 0, 0, 0];
  }
  if (rating <= 5) {
    return [1, 1, 0, 0, 0];
  }
  if (rating <= 7) {
    return [1, 1, 1, 0, 0];
  }
  if (rating <= 9) {
    return [1, 1, 1, 1, 0];
  }
  if (rating > 9) {
    return [1, 1, 1, 1, 1];
  }
  return [0, 0, 0, 0, 0];
}

export function StarsRating({rating}: Props) {
  const {colors} = useTheme();

  const starsRating = calculateStarsRating(rating);

  return (
    <Container>
      {starsRating.map(completeStar => (
        <Icon
          name="star"
          color={completeStar ? colors.yellow : colors.gray[600]}
        />
      ))}
    </Container>
  );
}

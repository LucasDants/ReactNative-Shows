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
      <Icon
        name="star"
        color={starsRating[0] ? colors.yellow : colors.gray[600]}
      />
      <Icon
        name="star"
        color={starsRating[1] ? colors.yellow : colors.gray[600]}
      />
      <Icon
        name="star"
        color={starsRating[2] ? colors.yellow : colors.gray[600]}
      />
      <Icon
        name="star"
        color={starsRating[3] ? colors.yellow : colors.gray[600]}
      />
      <Icon
        name="star"
        color={starsRating[4] ? colors.yellow : colors.gray[600]}
      />
    </Container>
  );
}

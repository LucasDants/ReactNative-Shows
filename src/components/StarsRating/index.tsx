import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';
import {calculateStarsRating} from '../../utils/calculateStarsRating';

import {Container, Rating} from './styles';

type Props = {
  rating: number | null;
};

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
        style={styles.iconMargin}
      />
      <Icon
        name="star"
        color={starsRating[2] ? colors.yellow : colors.gray[600]}
      />
      <Icon
        name="star"
        color={starsRating[3] ? colors.yellow : colors.gray[600]}
        style={styles.iconMargin}
      />
      <Icon
        name="star"
        color={starsRating[4] ? colors.yellow : colors.gray[600]}
      />
      <Rating>{rating}</Rating>
    </Container>
  );
}

const styles = StyleSheet.create({
  iconMargin: {
    marginHorizontal: 5,
  },
});

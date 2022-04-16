import React, {memo} from 'react';
import {StarsRating} from '../StarsRating';

import {
  Container,
  Poster,
  InfoWrapper,
  Title,
  RatingWrapper,
  Rating,
  Genres,
} from './styles';

function ShowCardComponent() {
  return (
    <Container activeOpacity={0.7}>
      <Poster
        source={{
          uri: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
        }}
      />
      <InfoWrapper>
        <Title>The Avengers</Title>
        <RatingWrapper>
          <StarsRating rating={10} />
          <Rating>9.6</Rating>
        </RatingWrapper>
        <Genres>Action, Adventure, Drama</Genres>
      </InfoWrapper>
    </Container>
  );
}

export const ShowCard = memo(ShowCardComponent);

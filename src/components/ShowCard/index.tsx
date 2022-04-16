import React, {memo} from 'react';
import {ShowDTO} from '../../dtos/ShowDTO';
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

type Props = {
  show: ShowDTO;
};

function ShowCardComponent({show}: Props) {
  return (
    <Container
      style={({pressed}) => ({
        opacity: pressed ? 0.7 : 1,
      })}>
      <Poster
        source={{
          uri: show.image?.medium ?? '',
        }}
      />
      <InfoWrapper>
        <Title>{show.name}</Title>
        <RatingWrapper>
          <StarsRating rating={show.rating.average} />
          <Rating>{show.rating.average}</Rating>
        </RatingWrapper>
        <Genres>{show.genres.join(', ')}</Genres>
      </InfoWrapper>
    </Container>
  );
}

export const ShowCard = memo(ShowCardComponent);

import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {ShowDTO} from '../../dtos/ShowDTO';
import {StarsRating} from '../StarsRating';

import {Container, Poster, InfoWrapper, Title, Genres} from './styles';

type Props = {
  show: ShowDTO;
};

function ShowCardComponent({show}: Props) {
  const navigation = useNavigation();

  return (
    <Container
      style={({pressed}) => ({
        opacity: pressed ? 0.7 : 1,
      })}
      onPress={() => navigation.navigate('Show', {showID: show.id})}>
      <Poster
        source={{
          uri: show.image?.medium ?? '',
        }}
      />
      <InfoWrapper>
        <Title>{show.name}</Title>

        <StarsRating rating={show.rating.average} />
        <Genres>{show.genres.join(', ')}</Genres>
      </InfoWrapper>
    </Container>
  );
}

export const ShowCard = memo(ShowCardComponent);

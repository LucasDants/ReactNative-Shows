import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {EpisodeDTO} from '../../dtos/EpisodeDTO';

import {Container, Banner, Title} from './styles';

type Props = {
  episode: EpisodeDTO;
};

function EpisodeCardComponent({episode}: Props) {
  const navigation = useNavigation();

  function handleNavigateEpisode() {
    navigation.navigate('Episode', episode);
  }

  return (
    <Container onPress={handleNavigateEpisode}>
      <Banner source={{uri: episode.image.medium ?? ''}} />
      <Title>{`${episode.number}. ${episode.name}`}</Title>
    </Container>
  );
}

export const EpisodeCard = memo(EpisodeCardComponent);

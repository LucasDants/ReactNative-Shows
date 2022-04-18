import React from 'react';
import {useRoute} from '@react-navigation/native';

import {EpisodeDTO} from '../../dtos/EpisodeDTO';
import {removeHTMLTags} from '../../utils/removeHTMLTags';

import {Container, Banner, Content, Title, Subtitle, Summary} from './styles';
import {Header} from '../../components/Header';

type ParamsProps = EpisodeDTO;

export function Episode() {
  const route = useRoute();
  const episode = route.params as ParamsProps;

  return (
    <Container>
      <Header title="Episode" />
      <Banner source={{uri: episode.image?.original}} />
      <Content>
        <Title>
          {episode.number}. {episode.name}
        </Title>
        <Subtitle>Season {episode.season}</Subtitle>
        <Summary>{removeHTMLTags(episode.summary)}</Summary>
      </Content>
    </Container>
  );
}

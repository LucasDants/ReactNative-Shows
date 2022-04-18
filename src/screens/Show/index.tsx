import {useRoute} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {FlatList} from 'react-native';

import {EpisodeCard} from '../../components/EpisodeCard';
import {FavoriteButton} from '../../components/FavoriteButton';
import {Header} from '../../components/Header';
import {Load} from '../../components/Load';
import {StarsRating} from '../../components/StarsRating';

import {EpisodeDTO} from '../../dtos/EpisodeDTO';
import {useShow} from '../../hooks/useShow';
import {groupBy} from '../../utils/groupBy';
import {removeHTMLTags} from '../../utils/removeHTMLTags';

import {
  Container,
  Content,
  Title,
  Subtitle,
  Main,
  Banner,
  Summary,
  Season,
} from './styles';

type ParamsProps = {
  showID: number;
};

export function Show() {
  const {params} = useRoute();
  const {showID} = params as ParamsProps;

  const {data, loading} = useShow(showID);

  const {name, genres, image, rating, summary, premiered, ended, schedule} =
    data;
  const episodes = data._embedded?.episodes ?? [];

  const seasons = Object.values(groupBy(episodes, 'season')) as [EpisodeDTO[]];

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Header
        title="Show"
        RightButton={
          <FavoriteButton show={{id: showID, name, genres, rating, image}} />
        }
      />
      <Content>
        <Main>
          <Banner source={{uri: image?.original}} />
          <Title>{name}</Title>
          <StarsRating rating={rating.average} />
          <Subtitle>
            {genres.join(', ')} {'\n'}
            {premiered.split('-')[0]} ●{' '}
            {ended
              ? ended.split('-')[0]
              : `${schedule.time}h / ${schedule.days.join(', ')}`}
          </Subtitle>
        </Main>
        <Summary>{removeHTMLTags(summary)}</Summary>
        {seasons.map((season, index) => (
          <Fragment key={season[0].name}>
            <Season>Season {index + 1}</Season>
            <FlatList
              data={season}
              renderItem={({item}) => <EpisodeCard episode={item} />}
              keyExtractor={item => `${item.id}-${item.name}`}
              horizontal
            />
          </Fragment>
        ))}
      </Content>
    </Container>
  );
}

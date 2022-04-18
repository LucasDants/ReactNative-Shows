import {useRoute} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {FlatList} from 'react-native';

import {EpisodeCard} from '../../components/EpisodeCard';
import {FavoriteButton} from '../../components/FavoriteButton';
import {Header} from '../../components/Header';
import {Load} from '../../components/Load';
import {PersonCard} from '../../components/PersonCard';
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
  ListTextSeparator,
} from './styles';

type ParamsProps = {
  showID: number;
};

export function Show() {
  const {params} = useRoute();
  const {showID} = params as ParamsProps;

  const {data, loading} = useShow(showID);

  if (loading) {
    return <Load />;
  }

  const episodes = data._embedded?.episodes ?? [];
  const cast = data._embedded?.cast ?? [];
  const seasons = Object.values(groupBy(episodes, 'season')) as [EpisodeDTO[]];

  const genres = data.genres.join(', ');
  const premiered = data.premiered.split('-')[0];
  const ended = data.ended
    ? data.ended.split('-')[0]
    : `${data.schedule.time}h / ${data.schedule.days.join(', ')}`;

  return (
    <Container>
      <Header
        title="Show"
        RightButton={
          <FavoriteButton
            show={{
              id: showID,
              name: data.name,
              genres: data.genres,
              rating: data.rating,
              image: data.image,
            }}
          />
        }
      />
      <Content>
        <Main>
          <Banner source={{uri: data.image?.original}} />
          <Title>{data.name}</Title>
          <StarsRating rating={data.rating.average} />
          <Subtitle>
            {genres} {'\n'}
            {premiered} ● {ended}
          </Subtitle>
        </Main>
        <Summary>{removeHTMLTags(data.summary)}</Summary>
        <ListTextSeparator>Cast</ListTextSeparator>
        <FlatList
          data={cast}
          renderItem={({item}) => <PersonCard cast={item} />}
          keyExtractor={item => `${item.person.id} ${item.character.name}`}
          horizontal
        />
        {seasons.map((season, index) => (
          <Fragment key={season[0].name}>
            <ListTextSeparator>Season {index + 1}</ListTextSeparator>
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

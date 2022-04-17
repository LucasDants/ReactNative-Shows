import {useNavigation, useRoute} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';
import {EpisodeCard} from '../../components/EpisodeCard';
import {StarsRating} from '../../components/StarsRating';
import {EpisodeDTO} from '../../dtos/EpisodeDTO';
import {useShow} from '../../hooks/useShow';
import {groupBy} from '../../utils/groupBy';

import {
  Container,
  Header,
  Content,
  Title,
  Subtitle,
  Main,
  Banner,
  Summary,
  Season,
} from './styles';

export function Show() {
  const {params} = useRoute();
  const navigation = useNavigation();
  const {showID} = params;
  const {colors} = useTheme();

  const {data, loading} = useShow(showID);

  const {name, genres, image, rating, summary, premiered, ended} = data;
  const episodes = data._embedded?.episodes ?? [];

  const seasons = Object.values(groupBy(episodes, 'season')) as [EpisodeDTO[]];

  if (loading) {
    return <></>;
  }

  return (
    <Container>
      <Header style={{elevation: 2}}>
        <Icon
          name="angle-left"
          size={26}
          color={colors.white}
          onPress={() => navigation.goBack()}
        />
        <Icon name="heart-o" size={26} color={colors.white} />
      </Header>
      <Content
        contentContainerStyle={{paddingHorizontal: 24, paddingBottom: 50}}>
        <Main>
          <Banner source={{uri: image.original}} />
          <Title>{name}</Title>
          <StarsRating rating={rating.average} />
          <Subtitle>
            {premiered.split('-')[0]} ● {genres.join(', ')} ●{' '}
            {ended.split('-')[0]}
          </Subtitle>
        </Main>
        <Summary>{summary.split(/<[^>]*>/).join('')}</Summary>
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

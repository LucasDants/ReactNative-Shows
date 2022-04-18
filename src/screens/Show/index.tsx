import {useNavigation, useRoute} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';
import {EpisodeCard} from '../../components/EpisodeCard';
import {Load} from '../../components/Load';
import {StarsRating} from '../../components/StarsRating';
import {EpisodeDTO} from '../../dtos/EpisodeDTO';
import {useShow} from '../../hooks/useShow';
import {groupBy} from '../../utils/groupBy';
import {removeHTMLTags} from '../../utils/removeHTMLTags';

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

type ParamsProps = {
  showID: number;
};

export function Show() {
  const {params} = useRoute();
  const navigation = useNavigation();
  const {showID} = params as ParamsProps;
  const {colors} = useTheme();

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
      <Header style={{elevation: 2}}>
        <BorderlessButton onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={26} color={colors.white} />
        </BorderlessButton>
        <BorderlessButton>
          <Icon name="heart-o" size={26} color={colors.white} />
        </BorderlessButton>
      </Header>
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

import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';
import {
  Container,
  BackgroundImage,
  Header,
  Content,
  Title,
  Subtitle,
  Summary,
} from './styles';
import {EpisodeDTO} from '../../dtos/EpisodeDTO';
import {BorderlessButton} from 'react-native-gesture-handler';
import {removeHTMLTags} from '../../utils/removeHTMLTags';

type ParamsProps = EpisodeDTO;

export function Episode() {
  const route = useRoute();
  const episode = route.params as ParamsProps;
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundImage source={{uri: episode.image?.original}}>
        <Header style={{elevation: 2}}>
          <BorderlessButton onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={26} color={colors.white} />
          </BorderlessButton>
        </Header>
      </BackgroundImage>
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

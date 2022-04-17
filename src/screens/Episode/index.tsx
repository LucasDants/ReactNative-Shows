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

export function Episode() {
  const {params} = useRoute();
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundImage source={{uri: params.image.original ?? ''}}>
        <Header style={{elevation: 2}}>
          <Icon
            name="angle-left"
            size={26}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
        </Header>
      </BackgroundImage>
      <Content>
        <Title>
          {params.number}. {params.name}
        </Title>
        <Subtitle>Season {params.season}</Subtitle>
        <Summary>{params.summary.split(/<[^>]*>/).join('')}</Summary>
      </Content>
    </Container>
  );
}

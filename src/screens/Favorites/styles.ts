import styled from 'styled-components/native';

import {FlatListProps, FlatList} from 'react-native';
import {ShowDTO} from '../../dtos/ShowDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 33px 24px 10px;
`;

export const ShowsList = styled(
  FlatList as new (props: FlatListProps<ShowDTO>) => FlatList,
).attrs({
  contentContainerStyle: {
    padding: 12,
  },
  showsVerticalScrollIndicator: false,
})``;

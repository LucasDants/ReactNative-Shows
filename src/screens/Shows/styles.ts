import {FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';
import {ShowDTO} from '../../dtos/ShowDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const ShowsList = styled(
  FlatList as new (props: FlatListProps<ShowDTO>) => FlatList,
).attrs({
  contentContainerStyle: {
    padding: 12,
  },
  showsVerticalScrollIndicator: false,
})``;

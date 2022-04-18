import styled, {css} from 'styled-components/native';

import {FlatListProps, FlatList} from 'react-native';
import {ShowStored} from '../../dtos/ShowDTO';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const ShowsList = styled(
  FlatList as new (props: FlatListProps<ShowStored>) => FlatList,
).attrs({
  contentContainerStyle: {
    padding: 12,
  },
  showsVerticalScrollIndicator: false,
})``;

export const EmptyListText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.subtitle};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
  `}

  line-height: 20px;
  text-align: center;
`;

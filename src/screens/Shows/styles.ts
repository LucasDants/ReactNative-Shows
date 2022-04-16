import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const Header = styled.View`
  padding-top: 33px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.title};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.white};
  `}

  padding: 12px;
`;

export const ShowsList = styled.FlatList``;
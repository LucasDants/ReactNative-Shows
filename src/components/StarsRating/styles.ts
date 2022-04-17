import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
`;

export const Rating = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.subtitle};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.gray[400]};
  `}
  margin-left: 10px;
`;

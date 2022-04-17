import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.Pressable`
  margin: 0 6px;
`;

export const Banner = styled.Image`
  width: 150px;
  height: 80px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.title};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.white};
  `}

  padding-top: 5px;
`;

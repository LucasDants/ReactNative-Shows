import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
  margin: 10px 0;
`;

export const Poster = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 90px;
  width: 70px;
  border-radius: 8px;
`;

export const InfoWrapper = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.title};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
  `}
`;

export const Genres = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.text};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.gray[400]};
  `}
`;

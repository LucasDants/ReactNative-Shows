import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {ImageComponent} from '../ImageComponent';

export const Container = styled.View`
  margin-right: 12px;
  align-items: center;
`;

export const Banner = styled(ImageComponent)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Person = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.title};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.white};
  `}

  padding-top: 5px;
`;

export const Character = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.subtitle};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.gray[400]};
  `}
`;

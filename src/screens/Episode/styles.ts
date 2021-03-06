import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {ImageComponent} from '../../components/ImageComponent';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const Banner = styled(ImageComponent).attrs({
  resizeMode: 'cover',
})`
  height: ${RFPercentage(35)}px;
  margin: 20px;
  border-radius: 5px;
`;

export const Content = styled.View`
  padding: 10px 24px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.title};
    font-size: ${RFValue(28)}px;
    color: ${theme.colors.white};
  `}

  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.subtitle};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.gray[400]};
  `}

  text-align: center;
`;

export const Summary = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.subtitle};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.gray[100]};
  `}

  text-align: justify;

  margin-top: 12px;
`;

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: ${RFPercentage(35)}px;
  border-radius: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 33px 24px 0;
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
    color: ${theme.colors.gray[400]};
  `}

  text-align: justify;

  margin-top: 12px;
`;

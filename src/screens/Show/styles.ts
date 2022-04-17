import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 33px 24px 0;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
})``;

export const Main = styled.View`
  align-items: center;
`;

export const Banner = styled.Image.attrs({resizeMode: 'contain'})`
  width: 50%;
  height: ${RFPercentage(40)}px;
  border-radius: 4px;
  margin: 16px 0px;
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

export const Season = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.title};
    font-size: ${RFValue(22)}px;
    color: ${theme.colors.white};
  `}

  padding: 20px 0;
`;

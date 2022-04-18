import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export const EmptyView = styled.View`
  width: 26px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.title};
    font-size: ${RFValue(26)}px;
    color: ${theme.colors.white};
  `}
`;

export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: [theme.colors.red[900], theme.colors.red[800]],
}))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 33px 24px 10px;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.red[900]}; ;
`;

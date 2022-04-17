import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const Animation = styled(LottieView)`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;

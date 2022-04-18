import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.gray[600]};
`;

export const MaterialIcon = styled(Icon)`
  position: absolute;
  align-self: center;
  top: 45%;
  font-size: 52px;
  color: ${({theme}) => theme.colors.white};
`;

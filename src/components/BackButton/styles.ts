import {ReactNode} from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

type BackButtonProps = {
  children: ReactNode;
};

export const Container = styled(BorderlessButton)<BackButtonProps>`
  padding: 5px;
`;

import {ReactNode} from 'react';
import {TextInput} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';

type ButtonProps = RectButtonProps & {
  children: ReactNode;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.gray[600]};
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 52px;
  padding-left: 12px;

  ${({theme}) => css`
    font-family: ${theme.fonts.text};
    color: ${theme.colors.white};
  `}
`;

export const ButtonClear = styled.TouchableOpacity`
  padding: 12px;
  margin-right: 7px;
`;

export const Button = styled(RectButton)<ButtonProps>`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.red};
  border-radius: 6px;
  margin-left: 7px;
  opacity: ${({enabled}) => (enabled ? 1 : 0.7)};
`;

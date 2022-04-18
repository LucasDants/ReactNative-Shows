import React from 'react';

import {Button, ButtonClear, Container, Input, InputArea} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
  searchEnabled?: boolean;
};

export function Search({
  onSearch,
  onClear,
  searchEnabled = true,
  ...rest
}: Props) {
  const {colors} = useTheme();
  return (
    <Container>
      <InputArea>
        <Input
          placeholder="Search shows by name..."
          placeholderTextColor={colors.gray[100]}
          {...rest}
        />
        <ButtonClear onPress={onClear}>
          <Icon name="remove" size={16} color={colors.gray[100]} />
        </ButtonClear>
      </InputArea>

      <Button onPress={onSearch} enabled={searchEnabled}>
        <Icon name="search" size={16} color={colors.white} />
      </Button>
    </Container>
  );
}

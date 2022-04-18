import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './styles';

export function BackButton() {
  const navigation = useNavigation();
  const {colors} = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container onPress={handleGoBack}>
      <MaterialIcon name="chevron-left" size={26} color={colors.white} />
    </Container>
  );
}

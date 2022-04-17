import React from 'react';
import loadAnimation from '../../assets/load.json';
import {Animation, Container} from './styles';

export function Load() {
  return (
    <Container>
      <Animation source={loadAnimation} autoPlay loop />
    </Container>
  );
}

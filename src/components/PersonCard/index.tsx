import React, {memo} from 'react';
import {CastDTO} from '../../dtos/CastDTO';

import {Container, Banner, Person, Character} from './styles';

type Props = {
  cast: CastDTO;
};

function PersonCardComponent({cast}: Props) {
  return (
    <Container>
      <Banner source={{uri: cast.person.image?.medium}} />
      <Person>{cast.person.name}</Person>
      <Character> {cast.character.name}</Character>
    </Container>
  );
}

export const PersonCard = memo(PersonCardComponent);

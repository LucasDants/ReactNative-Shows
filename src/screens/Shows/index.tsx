import React from 'react';
import {Search} from '../../components/Search';
import {ShowCard} from '../../components/ShowCard';

import {Container, Header, ShowsList, Title} from './styles';

export function Shows() {
  return (
    <Container>
      <Header />
      <Search
        onSearch={() => console.log('search')}
        onClear={() => console.log('clear')}
      />
      <Title>Shows</Title>
      <ShowsList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 10]}
        keyExtractor={item => item}
        renderItem={() => <ShowCard />}
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
      />
    </Container>
  );
}

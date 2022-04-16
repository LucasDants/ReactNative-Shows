import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {Search} from '../../components/Search';
import {ShowCard} from '../../components/ShowCard';
import {useShows} from '../../hooks/useShows';

import {Container, Header, ShowsList, Title} from './styles';

export function Shows() {
  const [search, setSearch] = useState('');
  const {data, loading, nextPage, searchShowsByName, clearSearch} = useShows();
  const {colors} = useTheme();

  return (
    <Container>
      <Header />
      <Search
        onSearch={() => {
          if (search) {
            searchShowsByName(search);
          }
        }}
        onClear={() => {
          setSearch('');
          clearSearch();
        }}
        onChangeText={text => setSearch(text)}
        onSubmitEditing={() => {
          if (search) {
            searchShowsByName(search);
          }
        }}
        value={search}
      />
      <Title>Shows</Title>
      <ShowsList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ShowCard show={item} />}
        onEndReachedThreshold={0.5}
        onEndReached={nextPage}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color={colors.red} /> : null
        }
      />
    </Container>
  );
}

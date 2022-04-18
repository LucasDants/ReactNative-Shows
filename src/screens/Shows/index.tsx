import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from 'styled-components';
import {Search} from '../../components/Search';
import {ShowCard} from '../../components/ShowCard';

import {useShows} from '../../hooks/useShows';

import {Container, ShowsList} from './styles';

import {AnimatedButton} from '../../components/AnimatedButton';
import {Header} from '../../components/Header';

export function Shows() {
  const [search, setSearch] = useState('');
  const {data, loading, nextPage, searchShowsByName, clearSearch} = useShows();
  const {colors} = useTheme();

  return (
    <Container>
      <Header hasBackButton={false} title="Shows" />
      <Search
        onSearch={() => {
          searchShowsByName(search);
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
        searchEnabled={!!search}
      />
      <ShowsList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ShowCard show={item} />}
        onEndReachedThreshold={0.5}
        onEndReached={nextPage}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color={colors.red[900]} />
          ) : null
        }
      />
      <AnimatedButton />
    </Container>
  );
}

import React, {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {ShowCard} from '../../components/ShowCard';
import {COLLECTION_FAVORITES} from '../../configs/storage';

import {Container, EmptyListText, ShowsList} from './styles';
import {Header} from '../../components/Header';
import {ShowStored} from '../../dtos/ShowDTO';
import {dangerToast} from '../../configs/toast';

export function Favorites() {
  const [shows, setShows] = useState<ShowStored[]>([]);

  const toast = useToast();

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem(COLLECTION_FAVORITES)
        .then(favoritesStored => {
          if (!favoritesStored) {
            return;
          }

          const favorites = JSON.parse(favoritesStored) as ShowStored[];

          const favoritesOrderedByName = favorites.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          setShows(favoritesOrderedByName);
        })
        .catch(err => {
          console.log(err);
          toast.show(
            'Oops, something went wrong. Please try again later.',
            dangerToast,
          );
        });
    }, []),
  );

  return (
    <Container>
      <Header title="Favorites" />
      <ShowsList
        data={shows}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ShowCard show={item} />}
        ListEmptyComponent={() => (
          <EmptyListText>
            You don't have favorites shows yet!{'\n'}
            Add some shows to your favorites!
          </EmptyListText>
        )}
      />
    </Container>
  );
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useToast} from 'react-native-toast-notifications';
import {useTheme} from 'styled-components';
import {ShowCard} from '../../components/ShowCard';
import {COLLECTION_FAVORITES} from '../../configs/storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Header, ShowsList} from './styles';

export function Favorites() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const toast = useToast();
  const {colors} = useTheme();

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem(COLLECTION_FAVORITES)
        .then(favoritesStored => {
          if (!favoritesStored) {
            return;
          }
          const favorites = JSON.parse(favoritesStored);
          setData(
            favorites.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            }),
          );
        })
        .catch(err => {
          console.log(err);
          toast.show('Oops, something went wrong. Please try again later.', {
            type: 'danger',
            placement: 'bottom',
            duration: 2000,
          });
        });
    }, []),
  );

  return (
    <Container>
      <Header style={{elevation: 2}}>
        <BorderlessButton onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={26} color={colors.white} />
        </BorderlessButton>
      </Header>
      <ShowsList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ShowCard show={item} />}
      />
    </Container>
  );
}

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useToast} from 'react-native-toast-notifications';
import {useTheme} from 'styled-components';
import {COLLECTION_FAVORITES} from '../../configs/storage';
import {Container} from './styles';
import {ShowStored} from '../../dtos/ShowDTO';
import {dangerToast} from '../../configs/toast';

type Props = {
  show: ShowStored;
};

export function FavoriteButton({show}: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const {colors} = useTheme();
  const toast = useToast();

  async function toggleFavoriteEpisode() {
    setLoading(true);
    try {
      const favoritesStored = await AsyncStorage.getItem(COLLECTION_FAVORITES);

      const favorites: ShowStored[] = favoritesStored
        ? JSON.parse(favoritesStored)
        : [];

      if (isFavorite) {
        const newFavorites = favorites.filter(item => item.id !== show.id);

        await AsyncStorage.setItem(
          COLLECTION_FAVORITES,
          JSON.stringify(newFavorites),
        );
        setIsFavorite(false);
      } else {
        const newFavorite = show;

        await AsyncStorage.setItem(
          COLLECTION_FAVORITES,
          JSON.stringify([...favorites, newFavorite]),
        );
        setIsFavorite(true);
      }
    } catch (err) {
      console.log(err);
      toast.show(
        'Oops, something went wrong. Please try again later.',
        dangerToast,
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    AsyncStorage.getItem(COLLECTION_FAVORITES)
      .then(favoritesStored => {
        if (!favoritesStored) {
          return;
        }
        const favorites = JSON.parse(favoritesStored) as ShowStored[];
        const epIsFavorite = favorites.some(item => show.id === item.id);

        setIsFavorite(epIsFavorite);
      })
      .catch(err => {
        console.log(err);
        toast.show('Oops, something went wrong. Please try again later.', {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
        });
      });
  }, []);

  return (
    <Container onPress={toggleFavoriteEpisode} enabled={!loading}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-o'}
        size={24}
        color={colors.white}
      />
    </Container>
  );
}

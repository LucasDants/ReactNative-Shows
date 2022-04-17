import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {ShowDTO} from '../dtos/ShowDTO';
import {getShow} from '../services/shows';

export function useShow(showID: number) {
  const [data, setData] = useState<ShowDTO>({} as ShowDTO);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const toast = useToast();

  useEffect(() => {
    setLoading(true);
    getShow(showID)
      .then(show => {
        setData(show);
      })
      .catch(() => {
        toast.show('Oops, something went wrong. Please try again later.', {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
        });
        navigation.goBack();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
  };
}

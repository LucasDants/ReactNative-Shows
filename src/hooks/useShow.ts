import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {dangerToast} from '../configs/toast';
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
        navigation.goBack();
        toast.show(
          'Oops, something went wrong. Please try again later.',
          dangerToast,
        );
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

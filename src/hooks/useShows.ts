import {useEffect, useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {dangerToast} from '../configs/toast';
import {ShowDTO} from '../dtos/ShowDTO';
import {getShows, searchShowsByName as searchShows} from '../services/shows';

export function useShows() {
  const [data, setData] = useState<ShowDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  const toast = useToast();

  function nextPage() {
    if (loading) {
      return;
    }
    if (error) {
      setRefresh(prev => !prev);
      return;
    }

    setPage(prev => prev + 1);
  }

  function searchShowsByName(name: string) {
    setIsSearching(true);
    setLoading(true);
    searchShows(name)
      .then(results => {
        const shows = results.map(item => ({
          ...item.show,
        }));
        if (shows.length === 0) {
          toast.show('Shows not found. Try another name.', dangerToast);
          return;
        }
        setData(shows);
      })
      .catch(err => {
        toast.show(
          'Oops, something went wrong. Please try again later.',
          dangerToast,
        );
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function clearSearch() {
    if (isSearching) {
      setData([]);
      setPage(0);
      setIsSearching(false);
    }
  }

  useEffect(() => {
    if (isSearching) {
      return;
    }
    setLoading(true);
    setError(false);
    getShows(page)
      .then(shows => {
        setData(prev => [...prev, ...shows]);
      })
      .catch(() => {
        toast.show('Oops, something went wrong. Please try again later.', {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
        });
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, refresh, isSearching]);

  return {
    data,
    loading,
    error,
    nextPage,
    searchShowsByName,
    clearSearch,
  };
}

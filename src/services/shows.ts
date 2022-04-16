import {ShowDTO} from '../dtos/ShowDTO';
import {api} from './api';

export async function getShows(page: number) {
  try {
    const {data} = await api.get<ShowDTO[]>('/shows', {
      params: {
        page,
      },
    });

    return data;
  } catch {
    throw new Error();
  }
}

export async function searchShowsByName(name: string) {
  try {
    const {data} = await api.get<Array<{show: ShowDTO}>>('/search/shows', {
      params: {
        q: name,
      },
    });
    return data;
  } catch (err) {
    throw new Error();
  }
}

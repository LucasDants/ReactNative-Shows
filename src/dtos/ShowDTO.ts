import {CastDTO} from './CastDTO';
import {EpisodeDTO} from './EpisodeDTO';
export interface ShowDTO {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  schedule: {
    time: string;
    days: string[];
  };
  network: {
    country: {
      timezone: string;
    };
  } | null;
  premiered: string;
  ended: string | null;
  summary: string;
  _embedded?: {
    episodes: EpisodeDTO[];
    cast: CastDTO[];
  };
}

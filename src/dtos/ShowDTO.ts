import {CastDTO} from './CastDTO';
import {EpisodeDTO} from './EpisodeDTO';
export interface ShowDTO {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  premiered: string;
  ended: string;
  summary: string;
  _embedded?: {
    episodes: EpisodeDTO[];
    cast: CastDTO[];
  };
}

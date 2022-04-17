export interface EpisodeDTO {
  id: number;
  name: string;
  number: number;
  season: number;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
}

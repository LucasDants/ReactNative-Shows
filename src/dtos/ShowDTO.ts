export interface ShowDTO {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number;
  };
  image: {
    medium: string;
  };
}

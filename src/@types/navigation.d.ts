import {EpisodeDTO} from '../dtos/EpisodeDTO';

export type ShowNavigationProps = {
  showID: number;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      LockScreen: undefined;
      Shows: undefined;
      Show: ShowNavigationProps;
      Episode: EpisodeDTO;
      Favorites: undefined;
    }
  }
}

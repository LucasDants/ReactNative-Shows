import {EpisodeDTO} from '../dtos/EpisodeDTO';

export type ShowNavigationProps = {
  showID: number;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Shows: undefined;
      Show: ShowNavigationProps;
      Episode: EpisodeDTO;
    }
  }
}

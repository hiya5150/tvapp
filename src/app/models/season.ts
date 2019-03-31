import {Episode} from './episode';

export class Season {

  seasonId: number;
  seasonNumber: number;
  episodes: Episode[];

  constructor(args?) {
    if (args) {
      this.seasonId = args.id;
      this.seasonNumber = args.number;
      this.episodes = args.episodes;

    }
  }
}

import {Episodes} from './episodes';

export class Seasons {

  seasonId: number;
  seasonNumber: number;
  episodes: Episodes;

  constructor(args?) {
    if (args) {
      this.seasonId = args.number;
      this.seasonNumber = args.number;
      this.episodes = args.episodes;

    }
  }
}

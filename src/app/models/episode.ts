export class Episode {

  episodeId: number;
  episodeName: string;
  episodeNumber: number;
  episodeAired: string;

  // episodeImage:

  constructor(args?) {
    if (args) {
      this.episodeId = args.id;
      this.episodeNumber = args.number;
      this.episodeAired = args.airdate;


    }
  }
}

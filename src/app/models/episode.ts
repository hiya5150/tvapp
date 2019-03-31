export class Episode {

  episodeId: number;
  episodeName: string;
  episodeUrl: string;
  episodeNumber: number;
  episodeAired: string;

  // episodeImage:

  constructor(args?) {
    if (args) {
      this.episodeId = args.id;
      this.episodeName = args.name;
      this.episodeUrl = args.url;
      this.episodeNumber = args.number;
      this.episodeAired = args.airdate;


    }
  }
}

export class Episodes {

  episodeName: string;
  episodeNumber: number;
  episodeSummary: string;
  episodeDate: string;
  lastEpisode: string;
  nextEpisode: string;
  // episodeImage:

  constructor(args?) {
    if (args) {

      this. episodeName = args.name;
      this.episodeNumber = args.number;
      this.episodeSummary = args.summary;
      this.episodeDate = args.episodeDate;
      this.lastEpisode = args.previousepisode;
      this.nextEpisode = args.nextEpisode;

    }
  }
}

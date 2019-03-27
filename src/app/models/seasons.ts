export class Seasons {
  seasonNumber: number;
  episodeName: string;
  episodeNumber: number;
  episodeSummary: string;
  episodeDate: string;
  lastEpisode: string;
  nextEpisode: string;
  // episodeImage:
  constructor(args?) {
    if (args) {
      this.seasonNumber = args.seasonNumber;
      this. episodeName = args. episodeName;
      this.episodeNumber = args.episodeNumber;
      this.episodeSummary = args.episodeSummary;
      this.episodeDate = args.episodeDate;
      this.lastEpisode = args.lastEpisode;
      this.nextEpisode = args.nextEpisode;

    }
  }
}

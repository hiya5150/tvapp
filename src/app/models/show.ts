import {Seasons} from './seasons';

export class Show {

  showName: string;
  showDate: string;
  showStatus: string;
  showSummary: string;
  // showImg: string;
  episodeDetails: Seasons;

  // showImage:

  constructor(args?) {
    if (args) {
      this.showName = args.showName;
      this.showSummary = args.showSummary;
      this.showDate = args.showDate;
      this.showSummary = args.showSummary;
      // this.showImg = args.showImg;
      this.episodeDetails = args.episodeDetails;

    }
  }
}

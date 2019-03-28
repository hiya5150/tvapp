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
      this.showName = args.name;
      this.showSummary = args.summary;
      this.showDate = args.premiere;
      this.showStatus = args.status;
      // this.showImg = args.showImg;
      this.episodeDetails = args.episodeDetails;

    }
  }
}

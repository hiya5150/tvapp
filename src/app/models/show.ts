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
      this.showDate = args.premiered;
      this.showSummary = args.summary;
     // this.showImg = args.showImg;
      this.episodeDetails = args.episodeDetails;

    }
  }
}

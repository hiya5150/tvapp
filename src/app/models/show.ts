import {Season} from './season';

export class Show {

  showId: number;
  showName: string;
  showDate: string;
  showStatus: string;
  showSummary: string;
  showImg: {medium: string};
  seasons: Season[];

  // showImage:

  constructor(args?) {
    if (args) {
      this.showName = args.name;
      this.showDate = args.premiered;
      this.showSummary = args.summary;
      this.showImg = args.image;
      this.showStatus = args.status;
      this.seasons = args.seasons;
      this.showId = args.id;


    }
  }

  addSeason(season: Season) {
    if (!this.seasons) {
      this.seasons = [];
          }
    this.seasons.push(season);
  }
}

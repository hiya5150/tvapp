import {Season} from './season';
import {Episode} from './episode';


export class Show {

  showId: number;
  showName: string;
  showDate: string;
  showStatus: string;
  showSummary: string;
  showImg: string;
  seasons: Season[];
  nextEpisodeUrl: string;
  previousEpisodeUrl: string;
  nextEpisode: Episode;
  previousEpisode: Episode;


  constructor(args?) {
    if (args) {
      this.showName = args.name;
      this.showDate = args.premiered;
      this.showSummary = args.summary;
      this.showImg = (args.image) ? args.image.original : null;
      if (this.showImg) {
        this.showImg = 'https' + this.showImg.substring(4);
      }
      this.showStatus = args.status;
      this.seasons = args.seasons;
      this.showId = args.id;
      console.log(this.showId);
      this.previousEpisodeUrl = (args._links.previousepisode) ? args._links.previousepisode.href : null;
      this.nextEpisodeUrl = (args._links.nextepisode) ? args._links.nextepisode.href : null;



    }
  }

  addPreviousEpisode(ep: Episode) {
      this.previousEpisode = ep;
        }

  addNextEpisode(nextEp: Episode) {
    this.nextEpisode = nextEp;
  }


}



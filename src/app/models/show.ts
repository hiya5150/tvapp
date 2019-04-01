import {Season} from './season';
import {Episode} from './episode';
import {ShowsService} from './services/shows.service';

export class Show {

  showId: number;
  showName: string;
  showDate: string;
  showStatus: string;
  showSummary: string;
  showImg: { medium: string };
  seasons: Season[];
  nextEpisodeUrl: string;
  previousEpisodeUrl: string;
  nextEpisode: Episode;
  previousEpisode: Episode;


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
      console.log(this.showId);
      this.previousEpisodeUrl = (args._links.previousEpisode) ? args.links.previousEpisode.href : null;
      this.nextEpisodeUrl = (args._links.nextEpisode) ? args.links.nextEpisode.href : null;



    }
  }

  addPreviousEpisode(ep: Episode) {
      this.previousEpisode = ep;
        }

  addNextEpisode(nextEp: Episode) {
    this.nextEpisode = nextEp;
  }


}



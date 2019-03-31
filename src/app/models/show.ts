import {Season} from './season';
import {Episode} from './episode';

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
      this.previousEpisodeUrl = (args.links.previousepisode) ? args.links.previousepisode.href : null;
      this.nextEpisodeUrl = (args.links.nextepisode) ? args.links.nextepisode.hreff : null;


    }
  }

  addPreviousEpisode(episode: Episode) {

  }
}

//   addSeason(season: Season) {
//     if (!this.seasons) {
//       this.seasons = [];
//           }
//     this.seasons.push(season);
//   }
// }


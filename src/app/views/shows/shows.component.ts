import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../../models/services/shows.service';
import {Show} from '../../models/show';
import {ActivatedRoute} from '@angular/router';
import {Season} from '../../models/season';
import {Episode} from '../../models/episode';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: Show[];
  id: Show;
  episodeName: string;
  seasons: Season;

  constructor(private showsService: ShowsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( pm =>
      this.showsService.getShows( pm.get('query')).subscribe(results => {
        this.shows = [];
        results.map((item) => {
          const temp = new Show(item.show);
          this.shows.push(temp);
        })
        this.getNextPrevEpisodes();
      }));
      }


  ngOnInit() {
  }

  getNextPrevEpisodes(): void {
    this.shows.map(show => {
      if (show.nextEpisodeUrl) {
        this.showsService.getJsonForEpisodeCreation(show.nextEpisodeUrl).subscribe(
          res => show.addNextEpisode(new Episode(res))


        );
      }
      if (show.previousEpisodeUrl) {
        this.shows.map( show => {
          if (show.previousEpisodeUrl) {
            this.showsService.getJsonForEpisodeCreation(show.previousEpisodeUrl).subscribe(
              res1 => show.addPreviousEpisode(new Episode(res1))
            );
          }
        });


      }
    });
  }
}

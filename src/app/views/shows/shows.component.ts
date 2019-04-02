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
    // function (which is called below)issues call to API. subscribes shows to the results that are returned. adds results to shows array

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
// function issues call to API. susbscribes to the returned results, which are the names of the next and previous episodes.
  getNextPrevEpisodes(): void {
    this.shows.map(show => {
      if (show.nextEpisodeUrl) {
        this.showsService.getJsonForEpisodeCreation(show.nextEpisodeUrl).subscribe(
          res => show.addNextEpisode(new Episode(res))
        );
      }
      // function gets the information (name) for the next episode
      if (show.previousEpisodeUrl) {
        this.showsService.getJsonForEpisodeCreation(show.previousEpisodeUrl).subscribe(
          res1 => show.addPreviousEpisode(new Episode(res1))
        );
      }
    });
  }
}

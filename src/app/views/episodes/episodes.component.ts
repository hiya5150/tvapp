import { Component, Input, OnInit } from '@angular/core';
import {Episode} from '../../models/episode';
import {ShowsService} from '../../models/services/shows.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  @Input() id: string;
  episodes: Episode[];
  // columns for mat table
  displayedColumns: string[] = ['number', 'name', 'aired'];

  constructor(private showsService: ShowsService ) {}

  ngOnInit() {
    this.getEpisodes();
  }
// issues call to API. subscribes episodes to the results that are returned. adds results to episodes array
  getEpisodes(): void {
    this.showsService.getEpisode(this.id).subscribe(result => {
      this.episodes = [];

      result.map(item => {
        const temp = new Episode(item);
        this.episodes.push(temp);
      });
    });
  }

}

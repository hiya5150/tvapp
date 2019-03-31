import { Component, Input, OnInit } from '@angular/core';
import {Episode} from '../../models/Episode';
import {ShowsService} from '../../models/services/shows.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  @Input() id: string;
  episodes: Episode[];
  displayedColumns: string[] = ['number', 'name', 'aired'];

  constructor(private showsService: ShowsService ) {}

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.showsService.getEpisode(this.id).subscribe(result => {
      console.log(result);
      this.episodes = [];

      result.map(item => {
        const temp = new Episode(item);
        this.episodes.push(temp);
      });
    });
  }

}

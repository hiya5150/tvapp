import { Component, OnInit, Input } from '@angular/core';
import {Show} from '../../models/show';
import {ShowsService} from '../../models/services/shows.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})
export class SeasonsComponent implements OnInit {
  @Input() show: Show;

  id: number;
  constructor(private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // getSeasons(): void {
  //   this.showsService.getSeasons(this.id).subscribe(results => {this.show.seasons = results});
  // }

}



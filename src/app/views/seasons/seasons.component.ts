import { Component, OnInit, Input } from '@angular/core';
import {Show} from '../../models/show';
import {ShowsService} from '../../models/services/shows.service';
import {ActivatedRoute} from '@angular/router';
import {Season} from '../../models/season';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})
export class SeasonsComponent implements OnInit {
  show: Show;
  id: number;


  // season: Season;
  constructor(private showsService: ShowsService, private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  this.getShow();
  }

  getShow()  {
    this.showsService.getShow(this.id).subscribe((result) => this.show = new Show(result));
    this.getSeasons();
    console.log(this.show);
  }
  getSeasons() {
    this.showsService.getSeasons(this.id).subscribe(results => {this.show.seasons = results; });
  }

}



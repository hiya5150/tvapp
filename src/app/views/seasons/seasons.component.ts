import { Component, OnInit} from '@angular/core';
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

seasons: Season[];

  constructor(private showService: ShowsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm =>
      this.showService.getSeasons(pm.get('id')).subscribe(result => {
        this.seasons = [];

        result.map((item) => {
          const temp = new Season(item);
          this.seasons.push(temp);

        });
      }));


  }
  getSeason(): void {
    console.log('got it');

  }

  ngOnInit() {

  }

}



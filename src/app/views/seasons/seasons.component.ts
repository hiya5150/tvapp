import { Component, Input, OnInit} from '@angular/core';
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
  // @Input() id: number;

seasons: Season[];
  private id: string;

  constructor(
    private showService: ShowsService,
    private route: ActivatedRoute) {
      console.log('aaaa' + this.id);

      this.id = this.route.snapshot.paramMap.get('id');


  }
  getSeason(): void {
    this.showService.getSeasons(this.id).subscribe(result => {
      this.seasons = [];

      result.map((item) => {
        const temp = new Season(item);
        console.log(temp);
        this.seasons.push(temp);

      });
    });

  }

  ngOnInit() {
    this.getSeason();
  }

}



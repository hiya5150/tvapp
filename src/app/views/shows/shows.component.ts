import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../../models/services/shows.service';
import {Show} from '../../models/show';
import {ActivatedRoute} from '@angular/router';
import {Season} from '../../models/season';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: Show[];
  id: Show;
  seasons: Season;

  constructor(private showsService: ShowsService, private route: ActivatedRoute) {
    console.log(this.id)
    this.route.paramMap.subscribe( pm => {
      this.showsService.getShows( pm.get('query')).subscribe(results => {
        this.shows = [];
        results.map((item) => {
          const temp = new Show(item.show);
          console.log(temp);
          this.shows.push(temp);
        });
      });
      }
    );
  }

  ngOnInit() {
  }

}

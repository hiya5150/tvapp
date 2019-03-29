import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../../models/services/shows.service';
import {Show} from '../../models/show';
import {SHOWS} from '../../models/mock-shows';
import {ActivatedRoute} from '@angular/router';
// import {mockShowService} from '../../models/services/shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  shows: Show[];
  selectedShow: Show;

  constructor(private showsService: ShowsService, private route: ActivatedRoute) { }

  getShows(): void {
    this.showsService.getShows(this.route.snapshot.params.query).subscribe(results => {
      this.shows = [];
      results.map((item) => {
        const temp = new Show(item.show);
        this.shows.push(temp);

      });
    });
  }

  ngOnInit() {
    this.getShows();
  }

  showInfo(show: Show): void {
    this.selectedShow = show;

  }

}

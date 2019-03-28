import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../../models/services/shows.service';
import {Show} from '../../models/show';



@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  shows: Show[];
  selectedShow: Show;

  constructor(private showsService: ShowsService) {
  }

  getShows(): void {
    this.shows = [];


    this.showsService.getShows().subscribe(results => {

      results.map((item) => {
        const temp = new Show(item.show);
        this.shows.push(temp);
        console.log(this.shows);
      });
    });

  //   showInfo(show: Show): void {
  //     this.selectedShow = show
  // };
  }

  ngOnInit(): void {
    this.getShows();
  }
}


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
      // console.log(shows);
      results.map((item) => {
        const temp = new Show(item);
        console.log(item);
        this.shows.push(temp);
      });
    });

    // showInfo(show: Show): void {
    //   this.selectedShow = show;
    // }
  }

  ngOnInit(): void {
    this.getShows();
  }
}


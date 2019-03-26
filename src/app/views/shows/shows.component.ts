import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../../models/services/shows.service';
import {Show} from '../../models/show';
import {SHOWS} from '../../models/mock-shows';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  shows: Show[];
  selectedShow: Show;

  constructor(private showsService: ShowsService) { }

  getShows(): void {
    this.showsService.getShows().subscribe(shows => this.shows = shows);
  }

  ngOnInit() {
    this.getShows();
  }

  showInfo(show: Show): void {
    this.selectedShow = show;
  }

}

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

  shows = SHOWS;
  selectedShow: Show;

  constructor() { }

  ngOnInit() {
  }

  showInfo(show: Show): void {
    this.selectedShow = show;
  }

}

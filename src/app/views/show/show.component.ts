import { Component, OnInit, Input } from '@angular/core';
// import {ShowsService} from '../../models/services/shows.service';
import {Show} from '../../models/show';
import {ShowsService} from '../../models/services/shows.service';
// import {Seasons} from '../../models/seasons';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {
  @Input() show: Show;

  constructor() { }

  ngOnInit() {
  }

}

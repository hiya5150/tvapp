import { Component, OnInit, Input } from '@angular/core';
// import {ShowsService} from '../../models/services/shows.service';
import {Show} from '../../models/show';
// import {Season} from '../../models/seasons';
// import { StripTagsPipe } from 'angular-pipes';


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

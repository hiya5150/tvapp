import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../../models/services/shows.service';


@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  title = 'TV - App';
  query: string;


  constructor() { }

  ngOnInit() {
  }

}

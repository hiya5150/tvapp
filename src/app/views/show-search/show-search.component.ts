import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../../models/services/shows.service';
import {SHOWS} from '../../models/mock-shows';
import {Show} from '../../models/show';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.sass']
})
export class ShowSearchComponent implements OnInit {
  shows = SHOWS;


  constructor(private showsService: ShowsService) { }


  searchTvShow(term: string): Observable<Show[]> {
          if (!term) {
      // if not search term, return empty show array.
      return of([]);

    }
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Show} from '../show';
import {Seasons} from '../seasons';
import {SHOWS} from '../../models/mock-shows';



@Injectable({
  providedIn: 'root'
})
export class MockShowsService {

  constructor() { }


  getShows(): Observable<Show[]> {
    return of(SHOWS);

  }
}

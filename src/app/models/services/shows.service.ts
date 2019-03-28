import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Show} from '../show';
import {Seasons} from '../seasons';
import {SHOWS} from '../../models/mock-shows';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private showsUrl = 'http://api.tvmaze.com/search/shows?q=girls';

  constructor(private http: HttpClient) {
  }


  getShows(): Observable<any[]> {
    return this.http.get<any[]>(this.showsUrl);
  }
}


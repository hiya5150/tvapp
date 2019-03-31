import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
// http calls
  private showsUrl = 'http://api.tvmaze.com/search/shows?q=';
  private showUrl = 'http://api.tvmaze.com/shows/';
  private seasonUrl = 'http://api.tvmaze.com/shows/';

  constructor(private http: HttpClient) {
  }

// gets list of shows based on seach query
  getShows(query): Observable<any[]> {
    return this.http.get<any[]>(this.showsUrl + query);
  }

  // gets an individual show based on id
  getShow(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.showUrl + id + '?embed=nextepisode');
  }

  // gets list of season based on show's id
  getSeasons(id: any): Observable<any[]> {
    console.log(this.seasonUrl + id + '/seasons');
    return this.http.get<any[]>(this.seasonUrl + id + '/seasons');
  }
}


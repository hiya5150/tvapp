import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private showsUrl = 'http://api.tvmaze.com/search/shows?q=';
  private showUrl = 'http://api.tvmaze.com/shows/';
  private seasonUrl = 'http://api.tvmaze.com/shows/';

  constructor(private http: HttpClient) {
  }


  getShows(query): Observable<any[]> {
    return this.http.get<any[]>(this.showsUrl + query);
  }

  // getShow(id: number): Observable<any[]> {
  //   return this.http.get<any[]>(this.showUrl + id + '?embed=nextepisode');
  // }
  getSeasons(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.showUrl + id + '/seasons');
  }
}


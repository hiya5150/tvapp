import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) {
  }
// http call
  private baseUrl = 'http://api.tvmaze.com/';


// gets list of shows based on seach query
  getShows(query): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'search/shows?q=' + query);
  }
  //
  // // // gets an individual show based on id
  // // getShow(id: number): Observable<any[]> {
  // //   return this.http.get<any[]>(this.showUrl + id + '?embed=nextepisode');
  // }

  // gets list of season based on show's id
  getSeasons(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'shows/' + id + '/seasons');
  }
// get list of episodes
  getEpisode(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'seasons/' + id + '/episodes');
  }
}



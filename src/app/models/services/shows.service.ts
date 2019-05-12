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
  private baseUrl = 'https://api.tvmaze.com/';


// gets list of shows based on search query
  getShows(query): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'search/shows?q=' + query);
  }

  // gets list of season based on show's id
  getSeasons(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'shows/' + id + '/seasons');
  }
// get list of episodes
  getEpisode(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'seasons/' + id + '/episodes');
  }
  // gets JSON data from API for next/previous episode info
  getJsonForEpisodeCreation(passedUrl: string): Observable<any> {
    return this.http.get<[any]>(passedUrl);
  }
}



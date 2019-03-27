import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Show} from '../show';
import {Seasons} from '../seasons';
import {SHOWS} from '../../models/mock-shows';



@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor() { }



  getShows(): Observable<Show[]> {
    return of(SHOWS);

    }


  // constructor(private http: HttpClient) { }
  //
  //
  //
  // getShows(): Observable<Show[]> {
  //   return this.http.get<Show[]>('http://api.tvmaze.com');
  // }
//       this.shows = [new Show ({showName: 'Shtisel',
//         showSummary: 'show on a chassidic family living in the Geula neighborhood of Jerusalem',
//         episodeDetails: new Seasons({seasonNumber: 1, episodeName: 'The one with the dog', episodeNumber: 104,
//           episodeSummary: 'Shulem\'s grandson is expelled, so Shulem agrees to keep the dog, whom he calls Dubche',
//           episodeDate: 'June 15, 2014', lastEpisode: 'July 26, 2014'  }) }),
//       new Show({ showName: 'Shtisel', showSummary: 'show on a chassidic family living in the Geula neighborhood of Jerusalem',
//         episodeDetails: new Seasons({seasonNumber: 1, episodeName: 'The one where Elisheva escapes to London', episodeNumber: 110,
//           episodeSummary: 'Shulem pays a visit to Elisheva, and when she realizes that he\'s right, ' +
//             'she picks up her son and flies to London',
//           episodeDate: 'June 22, 2014', lastEpisode: 'July 26, 2014'  }) }),
//
//     ];
//     }}
}

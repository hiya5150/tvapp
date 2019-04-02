
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowSearchComponent} from './views/show-search/show-search.component';
import {ShowsComponent} from './views/shows/shows.component';
import {SeasonsComponent} from './views/seasons/seasons.component';
import {EpisodesComponent} from './views/episodes/episodes.component';


const routes: Routes = [
// these are the routes that allows user to navigate from one component to another
  {path: 'showSearch/', component: ShowSearchComponent},
  {path: 'shows/:query', component: ShowsComponent},
  {path: 'seasons/:id', component: SeasonsComponent},
  {path: 'episodes/:id', component : EpisodesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShowsComponent, SeasonsComponent];

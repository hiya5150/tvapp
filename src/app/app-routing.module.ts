import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowSearchComponent} from './views/show-search/show-search.component';
import {ShowsComponent} from './views/shows/shows.component';
import {ShowComponent} from './views/show/show.component';
import {SeasonsComponent} from './views/seasons/seasons.component';


const routes: Routes = [
  {path: 'showSearch/', component: ShowSearchComponent},
  {path: 'shows/:query', component: ShowsComponent},
  {path: 'show/:id', component: ShowComponent},
  {path: 'seasons', component: SeasonsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

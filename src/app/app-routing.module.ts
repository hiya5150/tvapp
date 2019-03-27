import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowSearchComponent} from './views/show-search/show-search.component';
import {ShowsComponent} from './views/shows/shows.component';
import {ShowComponent} from './views/show/show.component';


const routes: Routes = [
  {path: 'showSearch', component: ShowSearchComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'show', component: ShowComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

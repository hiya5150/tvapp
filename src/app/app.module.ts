import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShowsComponent } from './views/shows/shows.component';
import { EpisodesComponent } from './views/shows/episodes/episodes.component';
import { ShowListComponent } from './views/shows/show-list/show-list.component';
import { ShowSearchComponent } from './views/shows/show-search/show-search.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    EpisodesComponent,
    ShowListComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

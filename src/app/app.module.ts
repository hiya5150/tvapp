import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShowsComponent } from './views/shows/shows.component';
import { EpisodesComponent } from './views/shows/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

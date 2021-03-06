import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgPipesModule} from 'angular-pipes';

import { AppComponent } from './app.component';
import {ShowsComponent } from './views/shows/shows.component';
import { ShowSearchComponent } from './views/show-search/show-search.component';
import { SeasonsComponent } from './views/seasons/seasons.component';
import {HttpClientModule} from '@angular/common/http';
import { EpisodesComponent } from './views/episodes/episodes.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowSearchComponent,
    SeasonsComponent,
    EpisodesComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgPipesModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

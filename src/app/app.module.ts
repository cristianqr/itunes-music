import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MusicListComponent} from './music-list/music-list.component';
import {MusicSearchComponent} from './music-search/music-search.component';
import {HttpModule} from '@angular/http';
import {MusicAdminComponent} from './music-admin/music-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    MusicSearchComponent,
    MusicAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

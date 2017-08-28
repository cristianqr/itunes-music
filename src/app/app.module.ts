import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicComponent } from './src/app/music/music.component';
import { MusicListComponent } from './src/app/music-list/music-list.component';
import { MusicSearchComponent } from './src/app/music-search/music-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    MusicListComponent,
    MusicSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

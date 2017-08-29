import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-music-admin',
  templateUrl: './music-admin.component.html'
})
export class MusicAdminComponent implements OnInit {
  musicList: any[];
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }
  searchMusic (term) {
    this.http.get(`https://itunes.apple.com/search?term=${term}`).map(res => res.json())
      .subscribe(res => {
        this.musicList = res.results;
      });
  }

  deleteMusic (musicDelete) {
    this.musicList = this.musicList.filter(music => music.trackId !== musicDelete.trackId);
  }
}

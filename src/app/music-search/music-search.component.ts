import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html'
})
export class MusicSearchComponent implements OnInit {
  @Output() searchMusic = new EventEmitter<string>();
  constructor(
  ) { }

  ngOnInit() {
  }
}

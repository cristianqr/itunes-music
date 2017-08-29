import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html'
})
export class MusicListComponent implements OnInit {
  @Input() musicList;
  @Output() deleteMusic = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}

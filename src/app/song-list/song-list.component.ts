import { Song } from '../song';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {

  @Input()
  public songs: Song[];
  public disabledSongs: Song[] = [];

  public get totalDuration(): number {
    return this.songs.reduce((sum, song) => sum += song.duration, 0);
  }

}

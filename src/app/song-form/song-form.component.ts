import { Song } from '../song';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent {

  public song = new Song();
  public durationString: string;

  @Output()
  public addSong = new EventEmitter<Song>()

  public onSubmit(): void {
    this.addSong.emit(this.song);
    this.song = new Song();
  }

}
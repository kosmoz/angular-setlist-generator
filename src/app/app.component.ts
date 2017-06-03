import { GigDataService } from './gig-data.service';
import { Song } from './song';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public songs: Song[] = [];

constructor(public gigDataService: GigDataService) { }

  public print(): void {
    return print();
  }

}

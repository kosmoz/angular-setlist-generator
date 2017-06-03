import { GigDataService } from '../gig-data.service';
import { LogoService } from '../logo.service';
import { Song } from '../song';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent {

  @Input()
  public songs: Song[];

  constructor(
    public logoService: LogoService,
    public gigDataService: GigDataService
  ) { }

}

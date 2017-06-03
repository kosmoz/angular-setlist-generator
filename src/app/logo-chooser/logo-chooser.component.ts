import { LogoService } from '../logo.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo-chooser',
  templateUrl: './logo-chooser.component.html',
  styleUrls: ['./logo-chooser.component.css']
})
export class LogoChooserComponent {

  constructor(public logoService: LogoService) { }

  public onChange($event: Event): void {
    this.logoService.logoFile = ($event.target as HTMLInputElement).files[0];
  }

}

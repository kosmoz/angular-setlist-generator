import { GigDataService } from './gig-data.service';
import { LogoService } from './logo.service';
import { DndModule } from 'ng2-dnd';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongFormComponent } from './song-form/song-form.component';
import { DurationPipe } from './duration.pipe';
import { LogoChooserComponent } from './logo-chooser/logo-chooser.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongFormComponent,
    DurationPipe,
    LogoChooserComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot()
  ],
  providers: [
    LogoService,
    GigDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

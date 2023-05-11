import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { VideoComponent } from './video/video.component';
import { VideoDBService } from "./shared/video-db.service";
import { Routes, RouterModule } from "@angular/router";
import {MeinModule} from "./mein/mein.module";
import { FlashyDirective } from './flashy.directive';
import { ForChildComponent } from './for-child/for-child.component';

const meineRouten: Routes = [
  { path: 'video/:id', component: VideoComponent },
  { path: 'forChild', component: ForChildComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    FlashyDirective,
    ForChildComponent
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MeinModule
  ],
  providers: [VideoDBService, {provide: 'VideoComponentConfig', useValue: 'meineConfig'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

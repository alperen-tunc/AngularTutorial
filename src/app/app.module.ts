import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { VideoComponent } from './video/video.component';
import { VideoDBService } from "./shared/video-db.service";
import { WebsiteComponent } from './website/website.component';
import { Routes, RouterModule } from "@angular/router";

const meineRouten: Routes = [
  { path: 'video/:id', component: VideoComponent },
  { path: 'website', component: WebsiteComponent },
  { path:'',component: WebsiteComponent, pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    WebsiteComponent
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VideoDBService, {provide: 'VideoComponentConfig', useValue: 'meineConfig'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, OnInit, Input, EventEmitter, Output, Inject} from '@angular/core';
import {VideoDBService} from "../shared/video-db.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{

  length = 0;
  name = "Angular Tutorial";
  url = 'https://www.google.com/?hl=de';
  videos ;
  isGreenActive: boolean = true;
  isDisabled: boolean = false;
  meineFarbe = "red";
  constructor(datenbank: VideoDBService,
              @Inject('VideoComponentConfig') config: string,
              private activatedRoute: ActivatedRoute) {
    this.videos = datenbank.getVideos();
    console.log(config);
  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
  }

  @Output() meinEmitter = new EventEmitter();

  @Input('eigenschaft') eig: any;

  myClick() {
    this.length++;
  }

  myClickHandler(e: any) {
    console.log(e);
  }

  myEventUrl() {

  }

  myClick1(){
    window.alert(this.eig);
  }

  myClick2(){
    this.meinEmitter.emit();
  }
  myClick3() {
   console.log(this.videos);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoDBService {

  private _videos: string[];
  constructor() {
    this._videos = ['Angular', 'TS', 'JS', 'Python', 'C++', 'Java']
  }

  getVideos(){
    return this._videos;
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../../api-types';
import { Observable } from 'rxjs/Observable';
import { VideoDataService } from '../../video-data.service';

const API_URL = "http://localhost:8085/videos";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  selectedVideo: any;

  @Output() selectVideoEvent = new EventEmitter<any>();

  videoData$: Observable<Video[]>;

  constructor(svc: VideoDataService){
    this.videoData$ = svc.loadVideos();
  }
  
  
  selectVideo(video) {
    console.log("selecting " + video.title);
    this.selectedVideo = video;
    this.selectVideoEvent.emit(video);
  }

  ngOnInit() {
  }

}

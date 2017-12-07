import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  CurrentVideo: any;

  constructor() { }

  UpdateSelectedVideo(video){
    console.log('selected a new video')
    this.CurrentVideo = video
  }

  ngOnInit() {
  }

}

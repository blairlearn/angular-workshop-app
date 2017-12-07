import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {

  @Input() SelectedVideo: any[];

  constructor() {
   }
  
  ngOnInit() {
  }

}

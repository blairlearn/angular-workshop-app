import { Component, Input, OnInit } from '@angular/core';

import {Video} from './../../api-types'

@Component({
  selector: 'video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {

  @Input("SelectedVideo") video : Video[];

  constructor() {
   }
  
  ngOnInit() {
  }

}

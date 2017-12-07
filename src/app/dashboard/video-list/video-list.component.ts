import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../../api-types';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8085/videos";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  selectedVideo: any;

  @Output() selectVideoEvent = new EventEmitter<any>();

  videoData: Video[];
  
  constructor(http: HttpClient){
    http.get<Video[]>(API_URL)
      .subscribe((videolist: Video[]) => this.videoData = videolist );
  }
  
//  videoData: Video[] = [
//    {
//      "title": "Angular Observable Data Flow",
//      "author": "Kyle Cordes",
//      "id": "JPuqluYYa-o",
//      "IsSelected": false,
//      "viewDetails": [
//        {
//          "age": 17,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 27,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 37,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 47,
//          "region": "Europe",
//          "date": "2016-03-24"
//        }, {
//          "age": 37,
//          "region": "North America",
//          "date": "2016-03-24"
//        }, {
//          "age": 17,
//          "region": "North America",
//          "date": "2016-03-25"
//        }
//      ]
//    },
//    {
//      "title": "Angular Live Coding",
//      "author": "Kyle Cordes",
//      "id": "CkK1BT6mMAw",
//      "IsSelected": false,
//      "viewDetails": [
//        {
//          "age": 36,
//          "region": "North America",
//          "date": "2016-06-23"
//        }, {
//          "age": 30,
//          "region": "North America",
//          "date": "2016-06-23"
//        }, {
//          "age": 54,
//          "region": "North America",
//          "date": "2016-07-23"
//        }, {
//          "age": 43,
//          "region": "Europe",
//          "date": "2016-0-24"
//        }, {
//          "age": 32,
//          "region": "North America",
//          "date": "2016-08-24"
//        }, {
//          "age": 32,
//          "region": "North America",
//          "date": "2016-08-25"
//        }
//      ]
//    },
//    {
//      "title": "Managing State in Angular",
//      "author": "Kyle Cordes",
//      "id": "eBLTz8QRg4Q",
//      "IsSelected": false,
//      "viewDetails": [
//        {
//          "age": 17,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 27,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 37,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 47,
//          "region": "Europe",
//          "date": "2016-03-24"
//        }, {
//          "age": 37,
//          "region": "North America",
//          "date": "2016-03-24"
//        }, {
//          "age": 17,
//          "region": "North America",
//          "date": "2016-03-25"
//        }
//      ]
//    },
//    {
//      "title": "Modl Buildr",
//      "author": "Paul Spears",
//      "id": "4ENpTiHKyi4",
//      "IsSelected": false,
//      "viewDetails": [
//        {
//          "age": 36,
//          "region": "North America",
//          "date": "2016-06-23"
//        }, {
//          "age": 30,
//          "region": "North America",
//          "date": "2016-06-23"
//        }, {
//          "age": 54,
//          "region": "North America",
//          "date": "2016-07-23"
//        }, {
//          "age": 43,
//          "region": "Europe",
//          "date": "2016-0-24"
//        }, {
//          "age": 32,
//          "region": "North America",
//          "date": "2016-08-24"
//        }, {
//          "age": 32,
//          "region": "North America",
//          "date": "2016-08-25"
//        }
//      ]
//    },
//      {
//      "title": "ngConf 2015",
//      "author": "Oasis Digital Solutions Inc.",
//      "id": "NQOCQq6PLQg",
//      "IsSelected": false,
//      "viewDetails": [
//        {
//          "age": 17,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 27,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 37,
//          "region": "North America",
//          "date": "2016-03-23"
//        }, {
//          "age": 47,
//          "region": "Europe",
//          "date": "2016-03-24"
//        }, {
//          "age": 37,
//          "region": "North America",
//          "date": "2016-03-24"
//        }, {
//          "age": 17,
//          "region": "North America",
//          "date": "2016-03-25"
//        }
//      ]
//    }
//  ]
  
  selectVideo(video) {
    console.log("selecting " + video.title);
    this.selectedVideo = video;
    this.selectVideoEvent.emit(video);
  }

  ngOnInit() {
  }

}

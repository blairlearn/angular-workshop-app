import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Video } from './api-types';

const API_URL = "http://localhost:8085/videos";

@Injectable()
export class VideoDataService {

  constructor(private http: HttpClient ){ }

  loadVideos() : Observable<Video[]> {
    return this.http.get<Video[]>(API_URL)
          .map((videos: Video[]) =>  // map over Observable<Video[]
            videos.map(    // map over Video[]
              // New thing: "..." is the "object spread operator" which expands
              // the object into 
              video => ({ ...video, title: video.title.toUpperCase() })
            )
          );

//          .map((videos: Video[]) => videos.forEach(video => video.title = "TITLE!!"));
        }

}

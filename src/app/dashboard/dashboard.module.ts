import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component'
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoThumbnailComponent,
    VideoPlayerComponent,
    StatFiltersComponent
  ],
  providers: [
    
  ]
})
export class DashboardModule { }

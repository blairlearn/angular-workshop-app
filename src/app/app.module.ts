import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer-module/footer.module';
import { VideoDataService } from './video-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HttpClientModule ,
    ReactiveFormsModule   
  ],
  providers: [VideoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

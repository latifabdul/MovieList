import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http,HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {MovieGetService} from './Service/movie-get.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MovieGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

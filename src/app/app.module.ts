import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestHttpService } from './test-http.service';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component'

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TestHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

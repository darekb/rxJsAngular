import { Component, OnInit } from '@angular/core';
import { initObservable } from './init-observable';
import { TestHttpService } from './test-http.service'

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
}) export class AppComponent implements OnInit {
  title = 'app works!';
  wojs: Array<any> = [];

  constructor(private testHttpService:TestHttpService) {
    this.wojs = [];
  }

  ngOnInit() {
    //initObservable();
    const woj$ = this.testHttpService.getWojewodztwa();
    woj$.subscribe((wojs)=> {
      this.wojs = wojs;
      console.log('województwa: ', wojs);
    }, ()=> {
    }, ()=> {
      console.log('done')
    });
  }
}

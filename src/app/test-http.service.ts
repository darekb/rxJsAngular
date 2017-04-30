import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

export interface Voivodeship {
  voivodeship_id?: number;
  voivodeship_name?: string;
}
@Injectable() export class TestHttpService {

  constructor(private http:Http) {
  }

  getWojewodztwa():Observable<Voivodeship[]> {
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.get('https://api.mojaekipa.pl/v1/voivodeship')
      .map((data:Response) => {
        console.log('apiCallOk', data.json());
      })
      .catch((err:Response) => {
        err.status = 401;
        if(err.status == 401) {
          console.error('apiCallError - NotLogged (request for new token)', err.json());
          return this.http.get('https://api3.mojaekipa.pl/v1/specializations');
        } else {
          console.error('apiCallError - Other error', err.json());
          return Observable.throw(err);
        }
      }).map((data:Response) => {
        console.log('requestTokenOk - return api call', data.json());
        return this.http.get('https://api3.mojaekipa.pl/v1/voivodeship');
      }).catch((err:Response)=>{
        console.error('requestTokenError ', err.json());
        return Observable.throw(err);
      });
  }
}

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
    return this.http.get('https://api3.mojaekipa.pl/v1/voivodeship', {
        headers: headers
      })
      .map((data:Response) => data.json())
      .catch((err:Response) => {
        console.error('error', err.json());
        return Observable.throw(err);
      });
  }
}

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/Rx';
declare function fetch(url:string);

export function initObservable(){
  let keys$ = Observable.fromEvent(document, 'keyup')
    .map((keyUp: KeyboardEvent) => console.log(keyUp));
  keys$.subscribe();

  //let lessonsPromise =  fetch('https://api3.mojaekipa.pl/v1/voivodeship')
  let lessonsPromise =  fetch('/lessons')
  //.then(res => console.log('ok', res));

  let lessons$ = Observable.fromPromise(lessonsPromise)
    .map(lessons => console.log('lessons', lessons))
    .catch((err:Response) => {
      console.error('Error', err);
      return Observable.throw(err);
    });
  lessons$.subscribe();
  //let lessons$ = Observable.fromPromise(lessonsPromise);
  //lessons$.subscribe(
  //  lessons => console.log('Lessons', lessons),
  //  err => console.error('Error', err),
  //  () => console.log('Done')
  //);

  //sadfasdf
}

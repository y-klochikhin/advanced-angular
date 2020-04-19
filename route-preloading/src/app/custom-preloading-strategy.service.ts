import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of, Subject} from "rxjs";
import {delay, filter, first, flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  routeLinkPreload = new Subject();

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    //return of(null).pipe(delay(5000), flatMap(() => load()));

    return this.routeLinkPreload.asObservable().pipe(
        filter(routeLink => routeLink === route.path),
        first(),
        flatMap(() => load())
    );
  }
}

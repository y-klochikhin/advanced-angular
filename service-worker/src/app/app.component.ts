import {ApplicationRef, Component} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {concat, interval} from "rxjs";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-root',
  template: `
      Service Worker V2
  `,
  styles: []
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate, private app: ApplicationRef) {
    this.subscribeAvailable();
    this.subscribeActivated();
    this.checkUpdates();
  }

  private subscribeAvailable() {
    this.swUpdate.available.subscribe(event => {
      console.log('has available update', event);
      /*This file integrity is especially important when lazy loading modules. A JS bundle may reference many lazy chunks, and the filenames of the lazy chunks are unique to the particular build of the app. If a running app at version X attempts to load a lazy chunk, but the server has updated to version X + 1 already, the lazy loading operation will fail.*/
      return this.swUpdate.activateUpdate(); // may be fail on lazy loading chunk
    });
  }

  private subscribeActivated() {
    this.swUpdate.activated.subscribe(event => {
      console.log('update activated', event);
    })
  }

  private checkUpdates() {
    const appIsStable$ = this.app.isStable.pipe(first(Boolean));
    const every10Seconds$ = interval(10 * 1000);
    concat(appIsStable$, every10Seconds$).subscribe(() => {
      console.log('check update');
      return this.swUpdate.checkForUpdate();
    });
  }
}

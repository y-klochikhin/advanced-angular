import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/about" appPreload>About</a>
    <a routerLink="/contacts" appPreload>Contacts</a>
    <a routerLink="/contacts" appPreload>Contacts</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  ngDoCheck() {
    console.log( 'AppComponent.ngDoCheck' );
  }
}

import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child></app-child>
    <app-push [object]="object"></app-push>
    <button (click)="mutateObject()">mutate object</button>
    <button (click)="newObject()">new object</button>
  `,
  styles: []
})
export class AppComponent implements DoCheck {
  object: any = {};

  ngDoCheck(): void {
    console.log('%cAppComponent.ngDoCheck', 'color: forestgreen');
  }

  mutateObject() {
    this.object.property = Math.random();
  }

  newObject() {
    this.object = {
      property: Math.random()
    };
  }
}

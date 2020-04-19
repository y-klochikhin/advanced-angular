import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-grandchild',
  template: `
    <label>Bind to event <input (change)="handle()"></label>
    <label>Not bind to event <input></label>
  `,
  styles: [
  ]
})
export class GrandchildComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('GrandchildComponent.ngDoCheck');
  }

  handle() {
    setTimeout(() => console.log('timeout 1s'), 1000);
  }
}

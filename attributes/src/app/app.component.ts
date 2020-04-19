import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-item name="with-attribute"></app-item>
    <app-item [name]="'with-attribute-error'"></app-item>
  `,
  styles: []
})
export class AppComponent {
}

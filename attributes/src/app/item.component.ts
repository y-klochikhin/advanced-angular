import {Attribute, Component} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div>Item: {{name}}</div>
  `,
  styles: [
  ]
})
export class ItemComponent {
  constructor(@Attribute('name') public name: string) { }
}

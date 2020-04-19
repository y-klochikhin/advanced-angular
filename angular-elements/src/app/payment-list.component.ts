import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-payment-list',
  template: `
      <ng-container *ngFor="let name of names">
        <app-payment-method [name]="name"></app-payment-method>
      </ng-container>
  `,
  styles: [
  ]
})
export class PaymentListComponent {
  @Input() names: string[] = [];
}

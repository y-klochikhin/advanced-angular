import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-payment-list [names]="paymentMethodNames"></app-payment-list>
  `,
  styles: []
})
export class AppComponent {
  paymentMethodNames = ['paypal', 'stripe', 'vk', 'bloodmoney'];
}

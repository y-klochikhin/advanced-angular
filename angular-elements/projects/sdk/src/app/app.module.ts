import { BrowserModule } from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {PaymentMethodComponent} from "../../../../src/app/payment-method.component";
import {PaymentListComponent} from "../../../../src/app/payment-list.component";
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
      PaymentMethodComponent,
      PaymentListComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
      const PaymentMethodElement = createCustomElement(PaymentMethodComponent, {injector: this.injector});
      customElements.define('xsolla-payment-method', PaymentMethodElement);

      const PaymentListElement = createCustomElement(PaymentListComponent, {injector: this.injector});
      customElements.define('xsolla-payment-list', PaymentListElement);
  }
}

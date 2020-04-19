import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {PaymentMethodService} from "./payment-method.service";

@Component({
  selector: 'app-payment-method',
  template: `
    <div>Payment method - {{name}}</div>
    <div>Type - {{paymentMethodService.getPaymentType(name)}}</div>
  `,
  styles: [
  ]
})
export class PaymentMethodComponent {
  @Input() name: string;
  @Output() clicked = new EventEmitter<void>();

  @HostListener('click')
  private onClick() {
    this.clicked.emit();
  }

  constructor(public paymentMethodService: PaymentMethodService) {}
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private nameToTypeMap = {
    paypal: 'wallet',
    stripe: 'card',
    vk: 'wallet'
  };

  getPaymentType(paymentMethodName: string): string {
    const type = this.nameToTypeMap[paymentMethodName];
    return type ? type : 'default';
  }
}

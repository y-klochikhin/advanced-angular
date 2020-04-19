import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentMethodComponent } from './payment-method.component';
import { PaymentListComponent } from './payment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentMethodComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

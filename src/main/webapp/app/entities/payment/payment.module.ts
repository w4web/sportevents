import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentWrapperComponent } from '../../shared/components/formly/payment-wrapper.component';

import { PaymentRoutingModule } from './payment-routing.module';
import { TemplifySingleSharedModule } from 'app/shared/shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { PaymentStatusComponent } from './payment-status/payment-status.component';

@NgModule({
  declarations: [PaymentComponent, PaymentWrapperComponent, PaymentStatusComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'paymentCode', component: PaymentWrapperComponent }],
      validationMessages: [{ name: 'required', message: 'This field is required' }],
    }),
    TemplifySingleSharedModule,
  ],
})
export class PaymentModule {}

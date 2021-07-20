import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'payment-wrapper',
  template: `
    <div class="paymentWrap">
      <span>
        <ng-container #fieldComponent></ng-container>
      </span>
      <span>
        <button type="button" class="btn btn-primary">Activate code</button>
      </span>
    </div>
  `,
})
export class PaymentWrapperComponent extends FieldWrapper {}

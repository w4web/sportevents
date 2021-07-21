import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { TemplifySingleSharedModule } from 'app/shared/shared.module';

import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { fieldMatchValidator, minlengthValidationMessages, EmailValidator } from '../../app.module';

@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'email', validation: EmailValidator },
        { name: 'fieldMatch', validation: fieldMatchValidator },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
    }),

    MyAccountRoutingModule,
    TemplifySingleSharedModule,
  ],
})
export class MyAccountModule {}

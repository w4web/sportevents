import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { FormlyModule } from '@ngx-formly/core';
import { TemplifySingleSharedModule } from 'app/shared/shared.module';

import { NumberSelectComponent } from '../../shared/components/formly/number-select.component';
import { ValueSelectComponent } from '../../shared/components/formly/value-select.component';

export function minlengthValidationMessages(err: any, field: any): any {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

@NgModule({
  declarations: [MyProfileComponent, NumberSelectComponent, ValueSelectComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    FormlyModule.forRoot({
      types: [
        { name: 'numberSelect', component: NumberSelectComponent },
        { name: 'valueSelect', component: ValueSelectComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
    }),
    TemplifySingleSharedModule,
  ],
})
export class MyProfileModule {}

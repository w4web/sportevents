import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { TemplifySingleSharedModule } from '../shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsAndConditionsWrapperComponent } from './formly/termsAndConditions-wrapper.component';
import { PrivacyConditionsWrapperComponent } from './formly/privacyConditions-wrapper.component';

import { fieldMatchValidator, minlengthValidationMessages, EmailValidator } from '../../app.module';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'termsAndConditions', component: TermsAndConditionsWrapperComponent },
        { name: 'privacyConditions', component: PrivacyConditionsWrapperComponent },
      ],
      validators: [
        { name: 'email', validation: EmailValidator },
        { name: 'fieldMatch', validation: fieldMatchValidator },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
    }),
    TemplifySingleSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SignInComponent, SignUpComponent, TermsAndConditionsWrapperComponent, PrivacyConditionsWrapperComponent],
  exports: [RouterModule],
  providers: [],
})
export class SigninModule {}

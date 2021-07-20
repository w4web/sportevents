import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-termsAndConditions',
  template: `
    <div class="wrapTandC">
      <span><ng-container #fieldComponent></ng-container></span>
      <span><a href="#">terms and conditions</a>.*</span>
    </div>
  `,
})
export class TermsAndConditionsWrapperComponent extends FieldWrapper {}

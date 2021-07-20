import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-privacyConditions',
  template: `
    <div class="wrapTandC">
      <span><ng-container #fieldComponent></ng-container></span>
      <span><a href="#">privacy conditions</a>.*</span>
    </div>
  `,
})
export class PrivacyConditionsWrapperComponent extends FieldWrapper {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { UpdateComponent } from './update/update.component';
import { TemplifySingleSharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { fieldMatchValidator, minlengthValidationMessages, EmailValidator } from '../../app.module';

@NgModule({
  declarations: [EventsComponent, UpdateComponent],
  imports: [
    CommonModule,
    TemplifySingleSharedModule,
    EventsRoutingModule,
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
  ],
})
export class EventsModule {}

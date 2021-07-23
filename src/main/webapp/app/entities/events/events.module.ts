import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { UpdateComponent } from './update/update.component';
import { TemplifySingleSharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { fieldMatchValidator, minlengthValidationMessages, EmailValidator, numberValidator } from '../../app.module';
import { TimeSlotsComponent } from '../../shared/components/formly/time-slots.component';

@NgModule({
  declarations: [EventsComponent, UpdateComponent, TimeSlotsComponent],
  imports: [
    CommonModule,
    TemplifySingleSharedModule,
    EventsRoutingModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [{ name: 'timeSlots', component: TimeSlotsComponent }],
      validators: [
        { name: 'email', validation: EmailValidator },
        { name: 'fieldMatch', validation: fieldMatchValidator },
        { name: 'onlyNumber', validation: numberValidator },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
    }),
  ],
})
export class EventsModule {}

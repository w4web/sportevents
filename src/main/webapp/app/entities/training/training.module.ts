import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingUpdateComponent } from './training-update.component';
import { TemplifySingleSharedModule } from '../../shared/shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { TrainingDeleteDialogComponent } from './training-delete-dialog.component';
import { CalculateFuelScoresComponent } from '../../shared/components/formly/calculateFuelScores.component';

export function minlengthValidationMessages(err: any, field: any): any {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

@NgModule({
  declarations: [TrainingComponent, TrainingUpdateComponent, TrainingDeleteDialogComponent, CalculateFuelScoresComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    TemplifySingleSharedModule,
    FormlyModule.forRoot({
      types: [{ name: 'calculateFuelScores', component: CalculateFuelScoresComponent }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
    }),
  ],
})
export class TrainingModule {}

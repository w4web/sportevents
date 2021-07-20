import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TemplifySingleSharedModule } from 'app/shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductUpdateComponent } from './product-update.component';
import { ProductDeleteDialogComponent } from './product-delete-dialog.component';
import { productRoute } from './product.route';
import { FormlyModule } from '@ngx-formly/core';

// import { FileValueAccessor } from './file-value-accessor';
// import { FormlyFieldFile } from './file-type.component';

export function minlengthValidationMessages(err: any, field: any): any {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

@NgModule({
  imports: [
    TemplifySingleSharedModule,
    FormlyModule.forRoot({
      // types: [
      //   { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      // ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
    }),
    RouterModule.forChild(productRoute),
  ],
  declarations: [
    // FileValueAccessor,
    // FormlyFieldFile,
    ProductComponent,
    ProductUpdateComponent,
    ProductDeleteDialogComponent,
  ],
  entryComponents: [ProductDeleteDialogComponent],
})
export class DashboardProductModule {}

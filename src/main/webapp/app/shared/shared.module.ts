import { NgModule } from '@angular/core';
import { TemplifySingleSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { HttpLoaderFactory } from 'app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    TemplifySingleSharedLibsModule,
    Ng2SearchPipeModule,
    FormlyBootstrapModule,
    // FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      validationMessages: [{ name: 'required', message: 'This field is required' }],
    }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [
    TemplifySingleSharedLibsModule,
    FormlyBootstrapModule,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    TranslateModule,
    Ng2SearchPipeModule,
  ],
})
export class TemplifySingleSharedModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TemplifySingleSharedModule } from 'app/shared/shared.module';
import { TemplifySingleCoreModule } from 'app/core/core.module';
import { TemplifySingleAppRoutingModule } from './app-routing.module';

import { TemplifySingleEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { AppComponent } from 'app/app.component';
import { FormlyModule } from '@ngx-formly/core';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from 'app/layouts/header/header.component';
import { SingleLayoutComponent } from 'app/layout/layout.component';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { ExportDataComponent } from './export-data/export-data.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost',
  },
  palette: {
    popup: {
      background: '#000',
    },
    button: {
      background: '#f1d600',
    },
  },
  theme: 'edgeless',
  type: 'opt-out',
};

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function EmailValidator(control: AbstractControl): any {
  if (control.value && !emailRegex.test(control.value)) {
    return {
      email: { message: 'Your email is invalid.' },
    };
  }

  return null;
}

export function minlengthValidationMessages(err: any, field: any): any {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function fieldMatchValidator(control: AbstractControl): any {
  const { password, passwordConfirm } = control.value;

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './content/assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    TemplifySingleSharedModule,
    TemplifySingleCoreModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TemplifySingleEntityModule,
    TemplifySingleAppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    FormlyModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    AppComponent,
    SingleLayoutComponent,
    HeaderComponent,
    ErrorComponent,
    PageRibbonComponent,
    FooterComponent,
    ExportDataComponent,
  ],
  bootstrap: [AppComponent],
})
export class TemplifySingleAppModule {}

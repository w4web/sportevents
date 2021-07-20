import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ProfileService } from 'app/shared/services/profile.service';
import { SignUpService } from './sign-up.service';
import { EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from 'app/shared/constants/error.constants';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  error = false;
  errorEmailExists = false;
  errorUserExists = false;
  success = false;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  @ViewChild('reset', { static: false }) reset?: ElementRef<HTMLElement>;

  constructor(private router: Router, public profileService: ProfileService, public signUpService: SignUpService) {
    this.profileService.getRegisterFields().subscribe((fields: any) => {
      this.form = new FormGroup({});
      this.fields = fields;
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this.error = false;
    this.errorEmailExists = false;
    this.errorUserExists = false;
    this.success = false;

    const firstName = this.model.firstName;
    const lastName = this.model.lastName;
    const login = this.model.username;
    const email = this.model.email;
    const password = this.model.password;

    this.signUpService.save({ firstName, lastName, login, email, password, langKey: 'en' }).subscribe(
      () => {
        this.success = true;
        // this.options.resetModel();
        this.resetFields();
      },
      errorResponse => this.processError(errorResponse)
    );
  }

  resetFields(): void {
    if (this.reset) {
      const el: HTMLElement = this.reset.nativeElement;
      el.click();
    }
  }

  private processError(errorResponse: HttpErrorResponse): void {
    if (errorResponse.status === 400 && errorResponse.error.type === LOGIN_ALREADY_USED_TYPE) {
      this.errorUserExists = true;
    } else if (errorResponse.status === 400 && errorResponse.error.type === EMAIL_ALREADY_USED_TYPE) {
      this.errorEmailExists = true;
    } else {
      this.error = true;
    }
  }
}

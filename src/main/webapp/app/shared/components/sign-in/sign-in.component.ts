import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { ProfileService } from 'app/shared/services/profile.service';
import { LoginService } from 'app/core/login/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  authenticationError: any;

  constructor(private router: Router, private loginService: LoginService, public profileService: ProfileService) {
    this.profileService.getLoginFields().subscribe((fields: any) => {
      this.form = new FormGroup({});
      this.fields = fields;
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this.loginService.login(this.model).subscribe(
      () => {
        this.authenticationError = false;
        this.router.navigate(['']);
      },
      () => (this.authenticationError = true)
    );
  }

  requestResetPassword(): void {
    this.router.navigate(['/account/reset', 'request']);
  }
}

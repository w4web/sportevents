import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AccountService } from '../../core/auth/account.service';
import { UserService } from '../../core/user/user.service';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'jhi-my-account',
  templateUrl: './my-account.component.html',
})
export class MyAccountComponent implements OnInit {
  success = false;
  error = false;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  @ViewChild('reset', { static: false }) reset?: ElementRef<HTMLElement>;

  constructor(public profileService: ProfileService, private accountService: AccountService, private userService: UserService) {
    this.profileService.editUserFields().subscribe((fields: any) => {
      this.form = new FormGroup({});
      this.fields = fields;
      this.setFields();
    });
  }

  ngOnInit(): void {}

  setFields(): any {
    this.accountService.identity().subscribe(account => {
      if (account) {
        this.model = account;
      }
    });
  }

  submit(): void {
    this.success = false;
    this.error = false;

    this.accountService.save(this.model).subscribe(
      () => {
        this.accountService.authenticate(this.model);
        this.success = true;
        this.resetFields();
      },
      err => {
        this.error = true;
      }
    );
  }

  resetFields(): void {
    if (this.reset) {
      const el: HTMLElement = this.reset.nativeElement;
      el.click();
    }
  }
}

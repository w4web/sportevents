import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'jhi-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit, OnDestroy {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  isSaving = false;

  constructor(private router: Router, public commonService: CommonService, public paymentService: PaymentService) {
    this.paymentService.getPaymentFields().subscribe((fields: any) => {
      this.form = new FormGroup({});
      this.fields = fields;
    });
  }

  ngOnInit(): void {
    this.commonService.isBgWhite = true;
  }

  ngOnDestroy(): void {
    this.commonService.isBgWhite = false;
  }

  save(): void {
    this.isSaving = true;
    // console.log(this.model);
    this.router.navigate(['/payment/status']);
  }
}

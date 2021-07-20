import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'jhi-payment-status',
  templateUrl: './payment-status.component.html',
  styles: [],
})
export class PaymentStatusComponent implements OnInit, OnDestroy {
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.isBgWhite = true;
  }

  ngOnDestroy(): void {
    this.commonService.isBgWhite = false;
  }
}

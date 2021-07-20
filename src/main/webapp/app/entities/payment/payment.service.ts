import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(protected http: HttpClient) {}

  getPaymentFields(): any {
    return this.http.get<any>('./content/assets/data/payment.json');
  }
}

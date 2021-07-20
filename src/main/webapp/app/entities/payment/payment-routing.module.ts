import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { PaymentComponent } from './payment.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'MyProfile',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'status',
    component: PaymentStatusComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'MyProfile',
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}

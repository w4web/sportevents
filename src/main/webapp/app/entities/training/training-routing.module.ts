import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { TrainingComponent } from './training.component';
import { TrainingUpdateComponent } from './training-update.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'Training',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TrainingUpdateComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Training',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TrainingUpdateComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Training',
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}

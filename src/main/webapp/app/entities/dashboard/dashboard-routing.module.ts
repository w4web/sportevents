import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

// import { Authority } from 'app/shared/constants/authority.constants';
import { Authority } from '../../shared/constants/authority.constants';
// import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'Products',
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

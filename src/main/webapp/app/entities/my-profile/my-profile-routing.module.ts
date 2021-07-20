import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
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
export class MyProfileRoutingModule {}

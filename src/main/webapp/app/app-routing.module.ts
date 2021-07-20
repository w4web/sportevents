import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { Authority } from 'app/shared/constants/authority.constants';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { SingleLayoutComponent } from 'app/layout/layout.component';
import { ExportDataComponent } from './export-data/export-data.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./shared/components/signin.module').then(m => m.SigninModule) },
  { path: 'register', loadChildren: () => import('./shared/components/signin.module').then(m => m.SigninModule) },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    path: '',
    component: SingleLayoutComponent,
    children: [
      { path: '', redirectTo: 'payment', pathMatch: 'full' },
      {
        path: 'exportData',
        component: ExportDataComponent,
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./entities/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./entities/product/product.module').then(m => m.DashboardProductModule),
      },
      {
        path: 'training',
        loadChildren: () => import('./entities/training/training.module').then(m => m.TrainingModule),
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./entities/my-profile/my-profile.module').then(m => m.MyProfileModule),
      },
      {
        path: 'payment',
        loadChildren: () => import('./entities/payment/payment.module').then(m => m.PaymentModule),
      },
      {
        path: 'admin',
        data: {
          authorities: [Authority.ADMIN],
        },
        canActivate: [UserRouteAccessService],
        loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot([...routes], { enableTracing: DEBUG_INFO_ENABLED })],
  exports: [RouterModule],
})
export class TemplifySingleAppRoutingModule {}

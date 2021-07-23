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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'exportData',
        component: ExportDataComponent,
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./entities/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'my-account',
        loadChildren: () => import('./entities/my-account/my-account.module').then(m => m.MyAccountModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./entities/events/events.module').then(m => m.EventsModule),
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

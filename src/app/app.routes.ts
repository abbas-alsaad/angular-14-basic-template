import { Routes } from '@angular/router';
import { BlankComponent } from './shared/layouts/blank/blank.component';
import { AuthGaurd } from './core/services/auth.guard';
import { AdminComponent } from './shared/layouts/admin/admin.component';
import { AuthComponent } from './shared/layouts/auth/auth.component';

const adminRoutes: Routes = [
  {
    path: 'image',
    loadChildren: () =>
      import('./view/image/image.routes').then((m) => m.routes),
  },
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'session/sign-in',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'session',
        loadChildren: () =>
          import('./view/session/session.routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'others',
        loadChildren: () =>
          import('./view/others/others.routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthGaurd],
    component: AdminComponent,
    children: adminRoutes,
  },

  {
    path: '**',
    redirectTo: 'others/404',
  },
];

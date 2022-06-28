import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AuthGaurd } from './app/core/services/auth.guard';
import { AdminComponent } from './app/shared/layouts/admin/admin.component';
import { AuthComponent } from './app/shared/layouts/auth/auth.component';
import { BlankComponent } from './app/shared/layouts/blank/blank.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const adminRoutes: Routes = [
  {
    path: 'image',
    loadChildren: () =>
      import('./app/view/image/image.routes').then((m) => m.routes),
  },
];

const routes: Routes = [
  { path: '', redirectTo: 'image/add-image', pathMatch: 'full' },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'session',
        loadChildren: () =>
          import('./app/view/session/session.routes').then((m) => m.routes),
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
          import('./app/view/others/others.routes').then((m) => m.routes),
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

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));

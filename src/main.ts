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
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));

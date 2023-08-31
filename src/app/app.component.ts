import { Component, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './core/services/auth.guard';
import { AdminComponent } from './shared/layouts/admin/admin.component';
import { BlankComponent } from './shared/layouts/blank/blank.component';
import { AuthComponent } from './shared/layouts/auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AuthGaurd],
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basic-template-angular14';
}

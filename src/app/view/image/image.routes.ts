import { Route, Routes } from '@angular/router';
import { AddImageComponent } from './add-image/add-image.component';
import { ShowImageComponent } from './show-image/show-image.component';

export const routes: Routes = [
  {
    path: 'add-image',
    component: AddImageComponent,
  },
  {
    path: 'show-image',
    component: ShowImageComponent,
  },
];

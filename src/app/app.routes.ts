import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ParcelManagementComponent } from './features/parcel-management/parcel-management.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parcel-management', component: ParcelManagementComponent },
];

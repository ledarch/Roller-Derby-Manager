import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { TeamComponent } from './team';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'equipes', component: TeamComponent },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
];

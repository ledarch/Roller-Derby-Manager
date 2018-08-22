import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ListTeamComponent } from './list_team/list_team.component';
import { CreateTeamComponent } from './create_team/create_team.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'equipes', component: ListTeamComponent },
  { path: 'creer_equipe', component: CreateTeamComponent },
];

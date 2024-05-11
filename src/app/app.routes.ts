import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FitnessComponent } from './fitness/fitness.component';
import { ProfileComponent } from './profile/profile.component';
import { SIGNUP_ROUTES } from './signup/signup.routes';
import { authGuard } from './store/auth.guard';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    children: [...SIGNUP_ROUTES],
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'food',
    component: FoodComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'fitness',
    component: FitnessComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [authGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

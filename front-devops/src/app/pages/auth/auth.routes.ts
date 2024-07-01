import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';


export const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import(`./login/login.component`)
          .then(mod => mod.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import(`./register/register.component`)
          .then(mod => mod.RegisterComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import(`./profile/profile.component`)
          .then(mod => mod.ProfileComponent)
      }
    ]
  }
];
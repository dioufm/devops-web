import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

export const routes: Routes = [
  {
    path: '', component: AdminComponent, 
      children: [
        {
          path: 'users',
          loadComponent: () => import(`./users/users-admin.component`)
            .then(mod => mod.UsersAdminComponent)
        }
      ]
  },
];
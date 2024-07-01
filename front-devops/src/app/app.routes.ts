import { Routes } from '@angular/router';
import { NoServiceComponent } from './pages/nos-service/nos-service.component';


export const routes: Routes = [
    //{ path: '',title:"Accueil", component: HomeComponent },
      {
        path: '',  
        loadChildren: () => import('./pages/home/home.routes').then(routes => routes.routes),
      },
      {
        path: 'admin',  
        loadChildren: () => import('./pages/admin/admin.routes').then(routes => routes.routes),
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(routes => routes.routes)
      },
      {
        path: 'nos-services',
        component: NoServiceComponent
      },

     

];


import { Routes } from '@angular/router';
import { LoginComponent } from './features/Auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { EmpresaListComponent } from './features/empresas/empresa-list/empresa-list.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home page' },
  { path: 'login', component: LoginComponent, title: 'Login page' },
  { path: 'empresas',component: EmpresaListComponent, title: 'Empresas page', },
];

export default routes;

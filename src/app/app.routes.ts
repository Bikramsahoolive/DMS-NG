import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/after-login/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
    {path:'dashboard',component:DashboardComponent},
    { path: '**', redirectTo: '' }
];

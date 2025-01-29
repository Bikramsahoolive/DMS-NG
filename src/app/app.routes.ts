import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/after-login/dashboard/dashboard.component';
import { StorageInformationComponent } from './components/after-login/storage-information/storage-information.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
    {path:'dashboard',component:DashboardComponent,children:[
        {path:'storage-info',component:StorageInformationComponent}
    ]},
    
    // { path: '**', redirectTo: '' }
    
];

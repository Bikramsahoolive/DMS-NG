import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/after-login/dashboard/dashboard.component';
import { StorageInformationComponent } from './components/after-login/storage-information/storage-information.component';
import { AdminDashboardContentComponent } from './components/after-login/admin/admin-dashboard-content/admin-dashboard-content.component';
import { UserSetupComponent } from './components/after-login/admin/setup/user-setup/user-setup.component';
import { DistrictSetupComponent } from './components/after-login/admin/setup/district-setup/district-setup.component';
import { TahasilSetupComponent } from './components/after-login/admin/setup/tahasil-setup/tahasil-setup.component';
import { RiSetupComponent } from './components/after-login/admin/setup/ri-setup/ri-setup.component';
import { VillageSetupComponent } from './components/after-login/admin/setup/village-setup/village-setup.component';
import { KisamSetupComponent } from './components/after-login/admin/setup/kisam-setup/kisam-setup.component';
import { UserToAreaMappingComponent } from './components/after-login/admin/setup/user-to-area-mapping/user-to-area-mapping.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
    {path:'admin',component:DashboardComponent,children:[
        {path:'dashboard',component:AdminDashboardContentComponent},
        {path:'storage-info',component:StorageInformationComponent},
        {path:'setup/user-setup',component:UserSetupComponent},
        {path:'setup/district-setup',component:DistrictSetupComponent},
        {path:'setup/tahasil-setup',component:TahasilSetupComponent},
        {path:'setup/ri-setup',component:RiSetupComponent},
        {path:'setup/village-setup',component:VillageSetupComponent},
        {path:'setup/kisam-setup',component:KisamSetupComponent},
        {path:'setup/user-to-area-mapping',component:UserToAreaMappingComponent},
    ]},
    
    // { path: '**', redirectTo: '' }
    
];

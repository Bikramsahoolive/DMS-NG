import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { UserOutline,TeamOutline,MenuFoldOutline,MenuUnfoldOutline,DesktopOutline,AppstoreOutline,RestOutline,SettingOutline,LogoutOutline } from '@ant-design/icons-angular/icons';
import Swal from 'sweetalert2';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ RouterModule,NzMenuModule, NzIconModule,NzBreadCrumbModule,NzLayoutModule, NzSpaceModule, NzButtonModule, NzDropDownModule, NzToolTipModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

  isCollapsed = false;
  constructor(private iconService: NzIconService, private router:Router) {
      this.iconService.addIcon(UserOutline,
        TeamOutline,MenuFoldOutline,MenuUnfoldOutline,
        DesktopOutline,AppstoreOutline,RestOutline,
      SettingOutline,LogoutOutline);
     }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;



  }

  logout(){
    Swal.fire({
      title: "Logout !",
      text: "Do you want to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#ffffff",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Logout successfully"
        });
        this.router.navigate(['']);
      }
    });
  }


  goto(path:string){
   
    this.router.navigate([path])
  }
  
}

import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { UserOutline,TeamOutline,MenuFoldOutline,MenuUnfoldOutline,DesktopOutline,AppstoreOutline,RestOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-dashboard',
  imports: [ NzMenuModule, NzIconModule,NzBreadCrumbModule,NzLayoutModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

  isCollapsed = false;
  constructor(private iconService: NzIconService) {
      this.iconService.addIcon(UserOutline,
        TeamOutline,MenuFoldOutline,MenuUnfoldOutline,
        DesktopOutline,AppstoreOutline,RestOutline);
     }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  
}

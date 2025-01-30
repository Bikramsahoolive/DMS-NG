import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule,NzIconService } from 'ng-zorro-antd/icon';
import { FileExcelOutline, PlusCircleTwoTone} from '@ant-design/icons-angular/icons'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';


import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder
} from 'ng-zorro-antd/table';

interface ItemData {
  id:number,
  username:string,
  displayName:string,
  status:string,
  role:string,
  email:string,
  phone:string,
  address:string,
  photoURL:string
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<ItemData> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<ItemData> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-user-setup',
  imports: [FormsModule,NzButtonModule,NzIconModule,NzInputModule,NzTableModule,NzFloatButtonModule],
  templateUrl: './user-setup.component.html',
  styleUrl: './user-setup.component.css'
})
export class UserSetupComponent {
  constructor(private iconService :NzIconService ){
    this.iconService.addIcon(FileExcelOutline,PlusCircleTwoTone);
  }



  listOfColumns: ColumnItem[] = [
    {
      name: 'Status',
      sortOrder: null,
      sortFn: (a: ItemData, b: ItemData) => a.username.localeCompare(b.username),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Active', value: 'Active' },
        { text: 'Inactive', value: 'Inactive', byDefault: true }
      ],
      filterFn: (list: string[], item: ItemData) => list.some(name => item.status.indexOf(name) !== -1)
    },
    {
      name: 'Display Name',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.id - b.id,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Role',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: ItemData, b: ItemData) => a.role.length - b.role.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'Admin', value: 'Admin' },
        { text: 'DEO', value: 'DEO' }
      ],
      filterFn: (role: string, item: ItemData) => item.role.indexOf(role) !== -1
    }
  ];
  listOfData: ItemData[] = [
    {
      id:1,
  username:'bikramsahoo',
  displayName:'Bikram Sahoo',
  status:'Inactive',
  role:'Admin',
  email:'bikramkeshari.sahoo@silicontechlab.com',
  phone:'9776999202',
  address:'Jayadev vihar, Bhubaneswar.',
  photoURL:'https://photogov.net/_nuxt/img/result.266b50d.webp'
    }
  ];


}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule,NzIconService } from 'ng-zorro-antd/icon';
import { FileExcelOutline, PlusCircleTwoTone,FormOutline,InboxOutline,CloseOutline} from '@ant-design/icons-angular/icons'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { presetColors } from 'ng-zorro-antd/core/color';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadModule, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder
} from 'ng-zorro-antd/table';
import { HttpClient } from '@angular/common/http';

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

// interface ColumnItem {
//   name: string;
//   sortOrder: NzTableSortOrder | null;
//   sortFn: NzTableSortFn<ItemData> | null;
//   listOfFilter: NzTableFilterList;
//   filterFn: NzTableFilterFn<ItemData> | null;
//   filterMultiple: boolean;
//   sortDirections: NzTableSortOrder[];
// }

@Component({
  selector: 'app-user-setup',
  imports: [FormsModule,NzButtonModule,NzIconModule,NzInputModule,NzTableModule,
    NzFloatButtonModule,NzTagModule,NzSwitchModule,NzModalModule,NzSelectModule,
    NzUploadModule],
  templateUrl: './user-setup.component.html',
  styleUrl: './user-setup.component.css'
})
export class UserSetupComponent {

  
  constructor(private iconService :NzIconService,private messageService: NzMessageService,private http: HttpClient ){
    this.iconService.addIcon(FileExcelOutline,PlusCircleTwoTone,FormOutline,InboxOutline,CloseOutline);
  }


  readonly presetColors = presetColors;
  // readonly customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];




  listOfColumns: any[] = [
    {
      name: 'Sl No'
    },
    {name:'Action'},
    {
      name: 'Status',
      // sortOrder: null,
      // sortFn: (a: ItemData, b: ItemData) => a.username.localeCompare(b.username),
      // sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Active', value: 'Active' },
        { text: 'Inactive', value: 'Inactive' }//byDefault: true
      ],
      filterFn: (list: string[], item: ItemData) => list.some(name => item.status.indexOf(name) !== -1)
    },
    {
      name: 'User Name',
      
    },
    {
      name: 'Display Name',
    },
    {
      name: 'Role',
      // sortOrder: null,
      // sortDirections: ['ascend', 'descend', null],
      // sortFn: (a: ItemData, b: ItemData) => a.role.length - b.role.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'Admin', value: 'Admin' },
        { text: 'DEO', value: 'DEO' }
      ],
      filterFn: (role: string, item: ItemData) => item.role.indexOf(role) !== -1
    },
    {name:'Email'},
    {name:'Mobile No'},
    {name:'Address'},
    {name:'Photo'}
  ];



  listOfData: ItemData[] = [
    {
      id:1,
  username:'bikramsahoo',
  displayName:'Bikram Sahoo',
  status:'Inactive',
  role:'ADMIN',
  email:'bikramkeshari.sahoo@silicontechlab.com',
  phone:'9776999202',
  address:'Jayadev vihar, Bhubaneswar.',
  photoURL:'https://photogov.net/_nuxt/img/result.266b50d.webp'
    },
  //   {
  //     id:2,
  // username:'bikramsahoo',
  // displayName:'Bikram Sahoo',
  // status:'Inactive',
  // role:'DEO',
  // email:'bikramkeshari.sahoo@silicontechlab.com',
  // phone:'9776999202',
  // address:'Jayadev vihar, Bhubaneswar.',
  // photoURL:'https://photogov.net/_nuxt/img/result.266b50d.webp'
  //   },
  //   {
  //     id:3,
  // username:'bikramsahoo',
  // displayName:'Bikram Sahoo',
  // status:'Active',
  // role:'ADMIN',
  // email:'bikramkeshari.sahoo@silicontechlab.com',
  // phone:'9776999202',
  // address:'Jayadev vihar, Bhubaneswar.',
  // photoURL:'https://photogov.net/_nuxt/img/result.266b50d.webp'
  //   }
  ];




  isVisibleModal1 = false;


  usernameValue:string='';
  displaynameValue:string='';
  emailValue:string='';
  phoneValue:string='';
  addressValue:string='';
  roleValue:string='';
  fileListValue:any[]=[];


  showModal(): void {
    this.isVisibleModal1 = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    // this.isVisibleModal1 = false;
  }

  handleReset(): void {
    // alert('Button cancel clicked!');

    this.usernameValue='';
  this.displaynameValue='';
  this.emailValue='';
  this.phoneValue='';
  this.addressValue='';
  this.roleValue='';
  this.fileListValue=[];

  }
 
  closeModal(){
    this.isVisibleModal1 = false;
  }


  customRequest = (item: NzUploadXHRArgs):any => {
    const formData = new FormData();
    formData.append('file', item.file as any);

    return this.http.post('/your-upload-endpoint', formData).subscribe({
      next: (response) => {
        console.log('Upload successful:', response);
        item.onSuccess!(response, item.file, event);
      },
      error: (err) => {
        console.error('Upload error:', err);
        item.onError!(err, item.file);
      }
    });
  };

  handleChange({ file, fileList }: NzUploadChangeParam): void {
   
    const status = file.status;
    if (status !== 'uploading') {
      // console.log(file, fileList);
    }
    if (status === 'done') {
      this.messageService.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.messageService.error(`${file.name} file upload failed.`);
    }
  }


}

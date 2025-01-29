import { Component } from '@angular/core';
import { presetColors } from 'ng-zorro-antd/core/color';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import {StarOutline,UndoOutline} from '@ant-design/icons-angular/icons';
import { FormsModule } from '@angular/forms';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { DistrictDataService } from '../../../services/district-data.service';




@Component({
  selector: 'app-storage-information',
  imports: [NzTagModule,NzIconModule,FormsModule,NzSelectModule,NzButtonModule, NzRadioModule,NzEmptyModule],
  templateUrl: './storage-information.component.html',
  styleUrl: './storage-information.component.css'
})
export class StorageInformationComponent {
  readonly presetColors = presetColors;
  readonly customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
      
  constructor(private iconService: NzIconService, public districtervice : DistrictDataService) {
      this.iconService.addIcon(StarOutline,UndoOutline);
      
     }

     selectedDistrictValue = null;
     selectedTahasilValue=null
     size: NzButtonSize = 'large';



    
}

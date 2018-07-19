import { Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { WaterOfficesService } from '../../../@core/data/water-offices-table.service';

@Component({
  selector: 'ngx-water-offices-table',
  templateUrl: './water-offices-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class WaterOfficesTableComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {

      id: {
        title: 'منطقه',
        type: 'string',
      },
      firstName: {
        title: 'آدرس',
        type: 'string',
      },
      lastName: {
        title: 'تلفن',
        type: 'number',
      },
      username: {
        title: 'محدوده',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: WaterOfficesService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

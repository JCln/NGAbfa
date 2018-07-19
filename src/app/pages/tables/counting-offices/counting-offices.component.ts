import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CountingOfficesService } from '../../../@core/data/counting-offices.service';

@Component({
  selector: 'ngx-counting-offices',
  templateUrl: './counting-offices.component.html',
})
export class CountingOfficesComponent {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      date: {
        title: 'کد دفتر',
        type: 'number',
      },
      debtor: {
        title: 'نام مسئول',
        type: 'string',
      },
      creditor: {
        title: 'آدرس',
        type: 'string',
      },
      description: {
        title: 'تلفن',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CountingOfficesService) {
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

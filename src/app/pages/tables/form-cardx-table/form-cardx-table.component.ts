import { Component } from '@angular/core';
import { LocalDataSource} from 'ng2-smart-table';
import { CardXTableService } from '../../../@core/data/cardx-table.service';

@Component({
  selector: 'ngx-form-cardx-table',
  templateUrl: './form-cardx-table.component.html',
})
export class FormCardxTableComponent {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      preReadingDate: { title: 'تاریخ قرائت قبلی', type: 'string' },
      currentReadingDate: { title: 'تاریخ قرائت فعلی', type: 'string' },
      duration: { title: 'مدت', type: 'numeric' },
      preReadingNumber: {title: 'رقم قرائت قبلی', type: 'numeric'},
      currentReadingNumber: { title: 'رقم قرائت فعلی', type: 'numeric' },
      usage: { title: 'مصرف', type: 'numeric' },
      oweDate: { title: 'تاریخ بدهکاری', type: 'string' },
      amount: { title: 'مبلغ', type: 'numeric' },
      deadLine: { title: 'مهلت پرداخت', type: 'string' },
      creditorDate: { title: 'تاریخ بستانکاری', type: 'string' },
      creditorAmount: { title: 'مبلغ بستانکاری', type: 'numeric' },
      description: { title: 'توضیحات(صدور قبض/پرداخت)', type: 'string' },
      payId: { title: 'شناسه پرداخت', type: 'string' },

    },
  };


  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CardXTableService) {
    this.service.getAdvantageData().subscribe((data: any[]) => {
      this.source.load(data);
    });
  }
}

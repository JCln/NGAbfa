import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { WaterPriceTableService } from '../../../@core/data/water-price-table.service';

@Component({
  selector: 'ngx-water-price-table',
  templateUrl: './water-price-table.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})

export class WaterPriceTableComponent {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
      columns: {
        amount: { title: 'مبلغ', type: 'numeric' },
        paymentId: { title: 'شناسه پرداخت', type: 'string' },
        billId: { title: 'شناسه قبض', type: 'string' },
        isPayed: { title: 'پرداخت شده' },
        date: { title: 'تاریخ صدور', type: 'string' },
        deadlineDate: { title: 'مهلت پرداخت', type: 'string' },
      }
  };


  source: LocalDataSource = new LocalDataSource();
  constructor(private service: WaterPriceTableService) {

    this.service.getAdvantageData().subscribe((data: Object[]) => {
      this.source.load(data);
    });
  }
}
